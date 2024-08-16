import { collection, doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase.config";

function HostPage() { 
    const [host, setHost] = useState<string>("");
    const [room, setRoom] = useState<string>("");

    const handleHostCreateRoom = async () => { 
        if (host !== "" && room !== "") { 
            const roomRef = doc(db, "rooms", room)
            await setDoc(roomRef, {
                name: room
            });
            const guestRef = collection(roomRef, "guests");
            await setDoc(doc(guestRef), {
                name: host
            });
        }        
    }
    return (
        <div>
            <label>Create a room</label>
            <input type="text" value={host} placeholder="host name" 
                onChange={(e) => setHost(e.target.value)} />
            <input type="text" value={room} placeholder="room name"
                onChange={(e) => setRoom(e.target.value)} />
            <button onClick={handleHostCreateRoom}>CREATE</button>
        </div>
    );
}

export default HostPage;