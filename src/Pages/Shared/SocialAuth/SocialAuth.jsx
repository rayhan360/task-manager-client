import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
const SocialAuth = () => {
    return (
        <div>
            <div className="flex justify-evenly mt-5">
                <button><FaGoogle className="text-3xl"></FaGoogle></button>
                <button><FaGithub className="text-3xl"></FaGithub></button>
                <button><FaTwitter className="text-3xl"></FaTwitter></button>
            </div>
        </div>
    );
};

export default SocialAuth;