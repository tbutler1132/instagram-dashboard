import Header from "./Header";
import {useEffect, useState} from 'react'
import axios from "axios";

function Nav({token, pageId}) {

    const [accountInfo, setAccountInfo] = useState({})

    console.log(pageId)

    useEffect(() => {
        if(token){
            const getData = async () => {
                const instaAccount = await axios.get(`https://graph.facebook.com/v11.0/${pageId}?access_token=${token}&fields=instagram_business_account`)
                const account = await axios.get(`https://graph.facebook.com/v11.0/${instaAccount.data.instagram_business_account.id}?access_token=${token}&fields=biography,name,profile_picture_url`)
                setAccountInfo(account.data)
            }
           getData()
        }
    }, [token])

    console.log(accountInfo)

    return (
        <div style={{height: '100%'}}>
            <Header bio={accountInfo.biography}/>
            <div className="nav-items">
                    <h1>Campaigns</h1>
                    <li>Red Ocean</li>
                    <li>Blue square</li>
                    <li>Green Tile</li>
            </div>
        </div>
    );
}

export default Nav;