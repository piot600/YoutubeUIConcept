import Header from "../components/Header.jsx";
import BabyMonitorTechnology from "../assets/View3/Baby Monitor Technology.png"
import AGoodAutoresponder from "../assets/View3/A Good Autoresponder.png"
import SelectingTheRightHotel from "../assets/View3/Selecting The Right Hotel.png"
import NoComment from "../assets/View3/No comment.png"
import FoodDrink from "../assets/Food & Drink/Food & Drink.png"

import VideoPlayer from "../components/VideoPlayer.jsx";
import NextVideosSection from "../components/NextVideosSection.jsx";
import MenuSidebar from "../components/MenuSidebar.jsx";

const VideoPlayerPage = () => {
    return (

        <>
            <Header/>
            <main>
                <div className="video-player-section">
                    <VideoPlayer />

                    <div className="separator"></div>
                    <div className="video-player-desc">
                        <div className="video-player-desc2">
                            <a href="#">
                                <img className="profile" src={FoodDrink}/>
                            </a>
                            <div className="video-player-desc3">
                                <h4>Food & Drink</h4>
                                <p className="grey-p-small">Published on 14 Jun 2019</p>
                                <p className="amount-subs">245K subscribed</p>
                                <p className="long-desc">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad. </p>
                                <p className="grey-p-2">Show more</p>
                            </div>
                        </div>
                        <div>
                            <button className="player-button-subscribe">Subscribe 2.3m</button>
                            <button className="player-button-subscribe-short">Subscribe</button>
                        </div>

                    </div>
                    <div className="separator-2"></div>
                </div>

                <NextVideosSection/>
            </main>
            <MenuSidebar/>
        </>
    );
};

export default VideoPlayerPage;
