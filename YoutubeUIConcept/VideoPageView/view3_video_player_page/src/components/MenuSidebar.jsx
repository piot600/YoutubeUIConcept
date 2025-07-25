import homeIcon from "../assets/icons/home.svg"
import trendingIcon from "../assets/icons/trending.svg"
import subscriptionIcon from "../assets/icons/subscriptions.svg"
import libraryIcon from "../assets/icons/library.svg"

function MenuSidebar() {

    return(
        <>
            <aside className="mobile-menu">
                <nav className="menu-1">
                    <a href="#" className="icon-menu">
            <span className="icon-logo">
              <img src={homeIcon} alt="home-icon"/>
            </span>
                        Home
                    </a>
                    <a href="#" className="icon-menu">
            <span className="icon-logo">
              <img src={trendingIcon} alt="trending-icon"/>
            </span>
                        Trending
                    </a>
                    <a href="#" className="icon-menu">
            <span className="icon-logo">
              <img src={subscriptionIcon} alt="subscriptions-icon"/>
            </span>
                        Subscriptions
                    </a>
                    <a className="icon-menu" href="#">
            <span className="icon-logo">
               <img src={libraryIcon} alt="library-icon"/>
            </span>
                        Library
                    </a>
                </nav>
            </aside>
            </>
            )
            }
            export default MenuSidebar;