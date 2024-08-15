import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";

export const Auth = () => {
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
    };

    return (
        <div>
            <p>sign in with Google</p>
            <button onClick={signInWithGoogle}>sign in with Google</button>
        </div>
    );
};