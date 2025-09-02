import { HiBookOpen  } from "react-icons/hi";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaBolt, FaCocktail} from "react-icons/fa";
import { BsFillRocketFill } from "react-icons/bs";

const SideBar = () => {
    return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 
                    flex flex-col 
                    bg-white text-gray-900
                    dark:bg-gray-900 dark:text-white shadow-lg">
        <SideBarIcon icon={<FaBolt size="28" />} />
        <Divider />
        <SideBarIcon icon={<BsFillRocketFill size="26" />} />
        <SideBarIcon icon={<HiChatBubbleLeftRight size="26" />} />
        <SideBarIcon icon={<FaCocktail size="26" />} />
        <Divider />
        <SideBarIcon icon={<HiBookOpen size="28" />} />
    </div>
    );
  };

  const SideBarIcon = ({ icon, text='tooltip 💡' }) => (
    <div className="sidebar-icon group">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );

  const Divider = () => <hr className="sidebar-divider" />;

export default SideBar