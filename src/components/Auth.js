import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

export const Auth = () => {
    const cookies = new Cookies();
    const signInWithGoogle = async () => {
        try { 
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
        } catch (err) { 
            console.error(err);
        }
        
    };

    return (
        <div>
            <p>sign in with Google</p>
            <button onClick={signInWithGoogle}>sign in with Google</button>
        </div>
    );
};