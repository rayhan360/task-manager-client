import { useContext } from "react";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useLocation, useNavigation } from "react-router-dom";
import toast from "react-hot-toast";
const SocialAuth = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigation()
    const location = useLocation()

    const socialMediaSingIn = media => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success("user logged in successful")
                navigate(location?.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="flex justify-evenly mt-5">
                <button onClick={()=> socialMediaSingIn(googleLogin)}><FaGoogle className="text-3xl"></FaGoogle></button>
                <button><FaGithub className="text-3xl"></FaGithub></button>
                <button><FaTwitter className="text-3xl"></FaTwitter></button>
            </div>
        </div>
    );
};

export default SocialAuth;