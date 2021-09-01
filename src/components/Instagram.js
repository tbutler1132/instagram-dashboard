import { useEffect, useState } from "react";
import axios from 'axios'

function Instagram({token}) {

    const [image, setImage] = useState('')

    useEffect(() => {
        if(token){
           const getData = async () => {
               const userPages = await axios.get(`https://graph.facebook.com/v11.0/me/accounts?access_token=${token}`)
               const instaAccount = await axios.get(`https://graph.facebook.com/v11.0/${userPages.data.data[2].id}?access_token=${token}&fields=instagram_business_account`) 
               const media = await axios.get(`https://graph.facebook.com/v11.0/${instaAccount.data.instagram_business_account.id}/media?access_token=${token}`)
               const image = await axios.get(`https://graph.facebook.com/v11.0/${media.data.data[0].id}?fields=media_url&access_token=${token}`)
               setImage(image.data.media_url)
           }
           getData()
        }
    }, [token])

    if(!token) return null
    if(!image) return <div>Loading...</div>
    return (
        <div>
            <img width="250px" height="250px" src={image} alt="" />
        </div>
    );
}

export default Instagram;