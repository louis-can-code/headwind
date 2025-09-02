import { useState } from "react";
import { BsHash } from "react-icons/bs";
import { FaChevronRight, FaChevronDown, FaPlus } from "react-icons/fa";

//title (class depends on if clicked), plus
//if clicked AND there are discussion on this channel, discussion component for each available discussion
const ChannelBar = () => {
    const study_help = ["soft-eng","complexity","databases"]
    const games = ["dune-board-game", "hollow-knight", "spiritfarer", "bloons-td6"];
    const music = ["new_albums", "live_music"]

    return (
        <div className="channel-bar">
            <ChannelTitle />
            <div className="channel-container">
                <DropDown channelName="Game Discussion" discussions={games} />
                <DropDown channelName="Music" discussions={music} />
                <DropDown channelName="Study Help" discussions={study_help} />
            </div>
        </div>
    );
};

const ChannelTitle = () => {
    return (
        <div className="channel-title-section">
            <h1 className="channel-title">
                Channels
            </h1>
        </div>
    );
};

const DropDown = ({channelName, discussions}) => {
    const [expanded, setExpanded] = useState();
    const handleDropdown = () => {setExpanded(!expanded)};

    //bottom section checks if expanded AND if there are discussions AND if they are successfully rendered
    return (
        <div className="dropdown">
            <div onClick={handleDropdown} className="dropdown-header">
                <Chevron isExpanded={expanded} />
                <h3 className={expanded ? "dropdown-header-text-selected" : "dropdown-header-text"}>
                    {channelName}
                </h3>
                <FaPlus size="12" className="my-auto ml-auto" />
            </div>
            {
                expanded && discussions &&
                discussions.map((discussion) => <ChannelDiscussion discussion={discussion} />)
            }
        </div>
    );
};

const Chevron = ({ isExpanded }) => {

    return isExpanded ? (
            <FaChevronDown size="18" className="chevron" />
        ) : (
            <FaChevronRight size="18" className="chevron" />
        );
};

const ChannelDiscussion = ({ discussion }) => {
    return (
        <div className="dropdown-option">
            <BsHash size="24" className="text-gray-400" />
            <h4 className="dropdown-option-text">{discussion}</h4>
        </div>
    );
};

export default ChannelBar;