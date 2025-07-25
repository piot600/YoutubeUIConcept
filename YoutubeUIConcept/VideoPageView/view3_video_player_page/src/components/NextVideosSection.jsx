import BabyMonitorTechnology from "../assets/View3/Baby Monitor Technology.png";
import AGoodAutoresponder from "../assets/View3/A Good Autoresponder.png";
import SelectingTheRightHotel from "../assets/View3/Selecting The Right Hotel.png";
import NoComment from "../assets/View3/No comment.png";

function NextVideosSection() {

    return (
        <>
            <div className="next-videos-section">
                <div className="video-section">
                    <h2 className="section-title">
                        <a href="#">Next</a>
                        <div className="toggle-container">
                            AUTOPLAY
                            <div className="toggle-switch">
                                <div className="toggle-circle"></div>
                            </div>
                        </div>
                    </h2>
                    <div className="video-row">
                        <div className="video-card">
                            <img src={BabyMonitorTechnology} alt=""/>
                            <p className="video-timer">8:00</p>
                            <div className="video-info">
                                <div className="video-title">Baby Monitor Technology</div>
                                <div className="video-meta">
                                    <p>123k views</p>
                                    <p>Dollie Blair</p>
                                </div>
                            </div>
                        </div>

                        <div className="video-card">
                            <img src={AGoodAutoresponder} alt="" />
                            <p className="video-timer">8:00</p>
                            <div className="video-info">
                                <div className="video-title">A Good Autoresponder</div>
                                <div className="video-meta">
                                    <p>123k views</p>
                                    <p>Dollie Blair</p>
                                </div>
                            </div>
                        </div>

                        <div className="video-card">
                            <img src={SelectingTheRightHotel} alt="" />
                            <p className="video-timer">8:00</p>
                            <div className="video-info">
                                <div className="video-title">Selecting The Right Hotel</div>
                                <div className="video-meta">
                                    <p>123k views</p>
                                    <p>Dollie Blair</p>
                                </div>
                            </div>
                        </div>

                        <div className="video-card">
                            <img src={NoComment} alt="" />
                            <p className="video-timer">8:00</p>
                            <div className="video-info">
                                <div className="video-title">No Comment</div>
                                <div className="video-meta">
                                    <p>123k views</p>
                                    <p>Dollie Blair</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default NextVideosSection;