import { auth, provider } from "../firebase.config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();

type AuthPageType = {
    setIsAuth : (x:boolean)=>void
}
function AuthPage (props: AuthPageType) {
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            cookies.set("auth-token", result.user.refreshToken);
            props.setIsAuth(cookies.get("auth-token"));
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

export default AuthPage;