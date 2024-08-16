import React, { useState } from "react";
import GuestEnterSection from "../sections/GuestEnterSection";

function GuestPage() {  
    
    const [isRoomExist, setIsRoomExist] = useState<boolean>(true);
    return (
        <div>
            <GuestEnterSection setIsRoomExist={setIsRoomExist}/>            
            {!isRoomExist && <p>The room is not there yet, ask the host</p>}

            
        </div>
    );
}

export default GuestPage;