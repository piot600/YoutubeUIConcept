import hamburgerMenu from "../assets/icons/hamburger_menu.svg";
import youtubeLogo from "../assets/logos/Black.svg";
import searchIcon from  "../assets/icons/search.svg";
import cameraIcon from "../assets/icons/camera.svg";
import grid3x3Icon from "../assets/icons/grid3x3.svg";
import notifyIcon from "../assets/icons/notifications.svg";
import profileIcon from "../assets/Profiles/main.png";
import grid1x3Icon from "../assets/view2-mobile/1x3grid-dots.svg";

function Header() {
    return (
        <>
            <link
                rel="stylesheet"
            />

            <header className="header">
                <div className="left-section">
                    <a href="#" className="icon">
                        <img src={hamburgerMenu} alt="hamburger-menu"/>
                    </a>
                    <img src={youtubeLogo} alt="youtube-logo" className="logo"/>
                </div>

                <div className="middle-section">
                    <div className="search-container">
                        <input type="text" placeholder="Search" className="search-input"/>
                        <button className="search-button">
                            <img src={searchIcon} alt="search-icon"/>
                        </button>
                    </div>
                </div>

                <div className="right-section">
                    <a href="#" className="icon">
                        <img src={cameraIcon} alt="camera-icon"/>
                    </a>
                    <a href="#" className="icon">
                        <img src={grid3x3Icon} alt="grid-icon"/>
                    </a>
                    <a href="#" className="icon">
                        <img src={notifyIcon} alt="notify-icon"/>
                        <p className="notify-count">3</p>
                    </a>
                    <a href="#" className="mobile">
                        <img src={grid1x3Icon} alt="grid-icon"/>
                    </a>
                    <a href="#" className="icon user-icon">
                        <img className="profile" src={profileIcon} alt="profile-icon"/>
                    </a>
                </div>

            </header>
        </>
    )
}

export default Header