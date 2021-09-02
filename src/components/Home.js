import { useEffect, useState } from "react";
import axios from "axios";

function Home({instagramId, token}) {
    const[photos, setPhotos] = useState([])

    useEffect(() => {
        const getData = async () => {
            const media = await axios.get(`https://graph.facebook.com/v11.0/${instagramId}/media?fields=media_url,caption&access_token=${token}`) //
            setPhotos(media.data.data)
        }
        getData()
    }, [])

    const renderPictures = () => {
        return photos.map(photo =>
        <div className="instagram-post" key={photo.id}>
            <img height="250px" width="250px" key={photo.id} src={photo.media_url} alt="" />
            <small id="caption">{photo.caption}</small>
        </div> 
        )
    }

    return (
        <div className="home-dash">
            <h1>Feed</h1>
            <div className="photo-feed">
                {renderPictures()}
            </div>
        </div>
    );
}

export default Home;