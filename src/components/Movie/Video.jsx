import {useSelector} from "react-redux";
import {searchParamInYT} from "../../Tools/searchParamInYT.js";
import VideoLoader from "../Skeletons/SkeletonVideo.jsx";

const Video = () => {

    const { searchFilm, status } = useSelector((store) => store.movies);

    if (status === 'loading') {
        return (
            <div className="video-wrapper">
                <VideoLoader />
            </div>
        )
    }


    const trailerURL = searchFilm?.film?.trailerUrl;
    const videoURL = trailerURL ? searchParamInYT(trailerURL) : ''

    return (
        <>
            <div className="video-wrapper">

                <iframe
                    width="100%"
                    height="700"
                    src={`https://www.youtube.com/embed/${videoURL}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </>
    );
};

export default Video;