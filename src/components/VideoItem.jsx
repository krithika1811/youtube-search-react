export default function VideoItem ({video}){
    const { videoId } = video.id;
    const { title, thumbnails } = video.snippet;

    return (
        <div className="video-item">
            <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer" >
                <img src={thumbnails.default.url} alt={title} />
                <p>{title}</p>
            </a>
        </div>
    );
}