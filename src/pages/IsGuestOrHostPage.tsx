import React from "react";
import { Link } from "react-router-dom";
function IsGuestOrHostPage() {
    return (
        <div>
            <Link to="/party_app/guest" >GUEST</Link>
            <Link to="/party_app/host" >HOST</Link>
        </div>
    );
}
 export default IsGuestOrHostPage;