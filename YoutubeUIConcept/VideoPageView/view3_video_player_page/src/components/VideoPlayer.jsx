import MainPhoto from "../assets/View3/main_photo.png";
import pauseButton from "../assets/view3-icons/Pause.svg"
import nextButton from "../assets/view3-icons/Next.svg";
import volumeButton from "../assets/view3-icons/Volume.svg";
import subtitlesButton from "../assets/view3-icons/Subtitles.svg";
import settingsButton from "../assets/view3-icons/Settings.svg";
import sizeScreenButton from "../assets/view3-icons/Size.svg";
import fullScreenButton from "../assets/view3-icons/Full-Screen.svg";
import likeIcon from "../assets/view3-icons/like-icon.svg";
import dislikeIcon from "../assets/view3-icons/dislike-icon.svg";
import shareIcon from "../assets/view3-icons/share-icon.svg";
import moreIcon from "../assets/view3-icons/more-icon.svg";
import moreIcon2 from "../assets/view2-mobile/more-icon-mobile.svg";

function VideoPlayer() {

    return (
        <>

            <div className="video-player">
                <img className="main-img" src={MainPhoto} alt=""/>
                <div className="video-options">
                    <div className="video-options-row">
                        <p>1:34</p>
                        <p>19:00</p>
                    </div>
                    <div className="video-options-row">
                        <span className="video-length"></span>
                        <span className="video-length watched"></span>
                    </div>
                    <div className="video-options-row option-icons">
                        <div className="left-video-player-icons">
                            <img src={pauseButton} alt=""/>
                            <img src={nextButton} alt=""/>

                            <div className="volume">
                                <img src={volumeButton} alt=""/>
                                <div className="volume-strip">
                                    <span className="volume-strip-length"></span>
                                    <span className="volume-strip-length current"></span>
                                </div>
                            </div>
                        </div>
                        <div className="rigth-video-player-icons">
                            <img src={subtitlesButton} alt=""/>
                            <img src={settingsButton} alt=""/>
                            <img src={sizeScreenButton} alt=""/>
                            <img src={fullScreenButton} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="video-options-mobile">
                    <div className="video-options-row">
                        <img className="small-icon" src={pauseButton} alt=""/>
                        <div className="video-time">
                            <p>1:34</p>
                            <div className="video-length-size">
                                <span className="video-length"></span>
                                <span className="video-length watched"></span>
                            </div>
                            <p>-10:00</p>
                        </div>

                        <img className="small-icon" src={volumeButton} alt=""/>
                    </div>
                </div>
            </div>

            <div className="video-title-arrow">
                <h1>Dude You Re Getting A Telescope</h1>
                <img className="mobile" src={moreIcon2}/>
            </div>

            <div className="views-share">
                <div className="views">
                    <p className="grey-p">123k views</p>
                </div>
                <div className="share">
                    <div className="share-group-1">
                        <button className="player-button">
                            <img src={likeIcon} alt=""/>
                            <p>123k</p>
                        </button>
                        <button className="player-button">
                            <img src={dislikeIcon} alt=""/>
                            <p>435k</p>
                        </button>
                        <button className="player-button">
                            <img src={shareIcon} alt=""/>
                            <p>Share</p>
                        </button>
                    </div>
                    <div className="share-group-2">
                        <a href="">
                            <img src={moreIcon} alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPlayer;