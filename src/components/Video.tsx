export function Video() {
    const videoURI="cUT665tW4v8";
    const videoLink = "https://www.youtube.com/embed/" + videoURI;

    return(
        <div className="flex-1">
            <iframe width="100%" height="100%" src={videoLink}  title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}