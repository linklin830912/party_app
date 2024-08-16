import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase.config";

type GuestEnterSectionProps = {
    setIsRoomExist: (isRoomExist: boolean) => void
}
function GuestEnterSection(props: GuestEnterSectionProps) {
    const [room, setRoom] = useState<string>("");
    const [guest, setGuest] = useState<string>("");
    
  const handleNameOnClick = async (e: React.MouseEvent) => { 
    e.preventDefault(); 
    if (guest !== "" && guest !== "") {
        const roomRef = doc(db, "rooms", room);
        const hostingRoom = await getDoc(roomRef);
        if (hostingRoom.exists()) {
            addDoc(collection(roomRef, "guests"), {
                name:guest
            });
        } else {
            props.setIsRoomExist(false);
        }
    } 
  };
    return (
        <div>
            <label>Enter the room name:</label>
            <input type="text" value={room} placeholder="room name"
                onChange={(e) => setRoom(e.target.value)} />

            <label>Enter name:</label>
            <input type="text" value={guest} placeholder="your name"
                onChange={(e) => setGuest(e.target.value)} /> 
            
            <button onClick={handleNameOnClick}>SUBMIT</button>
        </div>
    );
}
export default GuestEnterSection;