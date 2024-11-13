import { useSelector } from "react-redux";
import VideoItem from "./VideoItem";

export default function VideoList(){
    const { videos, loading,error } = useSelector((state) => state);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error: {error} </p>;

    return (
        <div className="video-list">
            {videos.map((video) => (
                <VideoItem key={video.id.videoId} video={video}/>
            ))}
        </div>
    );
}
// const VideoList = ({ videos }) => {
//     return (
//       <div className="video-list">
//         {videos.map((video) => (
//           <div key={video.id} className="video-item">
//             <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
//             <h3>{video.snippet.title}</h3>
//             <p>{video.snippet.channelTitle}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };
  
//   export default VideoList;