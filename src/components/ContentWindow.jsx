import { FaCirclePlus } from "react-icons/fa6";
import TopNavigation from "./TopNavigation";

const ContentWindow = () => {
    return (
        <div className="content-window">
            <TopNavigation />

            <InputBar />
        </div>
    );
};

const InputBar = () => {
    return (
        <div className="input-bar">
            <FaCirclePlus size="22" className="text-green-500 mr-2" />
            <input type="text" placeholder="Enter message..." className="flex-1 focus:outline-0"/>
        </div>
    );
};

export default ContentWindow;