import SideBar from "./components/SideBar";
import ChannelBar from "./components/ChannelBar";
import TopNavigation from "./components/TopNavigation";
import ContentWindow from "./components/ContentWindow";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <ContentWindow />
    </div>
  );
}

export default App;
