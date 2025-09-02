import { FaSun, FaMoon, FaHashtag, FaBell, FaUserCircle, FaSearch } from 'react-icons/fa'
import useDarkMode from '../hooks/useDarkMode'

//hashtag, discussion title, hr, brief description, far right dark button, searchbar, bellicon, profile icon

const TopNavigation = () => {
    return (
        <div className='top-navigation'>
            <FaHashtag size="20" className='top-navigation-hash'/>
            <h2 className='top-navigation-title'>dune-board-game</h2>
            <hr className='top-navigation-divider' />
            <h3 className='top-navigation-text'>General discussion surrounding the 2019 remake of the classic dune board game</h3>
            <ThemeIcon />
            <Search />
            <FaBell size="24" className='top-navigation-icon' />
            <FaUserCircle size="24" className='top-navigation-icon'/>
        </div>
    );
};

//on clicking, changes darkTheme (triggering effect in useDarkMode hook)
const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);

    return (
        <span onClick={handleMode}>
            {
                darkTheme ? (
                    <FaSun size="24" className='top-navigation-icon' />
                ) : (
                    <FaMoon size="24" className='top-navigation-icon' />
                )
            }
        </span>
    );
};

const Search = () => {
    return (
        <div className='search-bar'>
            <input type='search' placeholder='Search...' className='focus:outline-0 flex-1'/>
            <FaSearch size="18" className='text-nowrap my-auto'/>
        </div>
    );
};

export default TopNavigation;