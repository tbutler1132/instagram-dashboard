import Header from "./Header";
import {useEffect, useState} from 'react'
import axios from "axios";

function Nav({token, instagramId}) {

    const [accountInfo, setAccountInfo] = useState({})


    useEffect(() => {
        if(token){
            const getData = async () => {
                const account = await axios.get(`https://graph.facebook.com/v11.0/${instagramId}?access_token=${token}&fields=biography,name,profile_picture_url`)
                setAccountInfo(account.data) 
            }
           getData()
        }
    }, [token])

    console.log(accountInfo)

    return (
        <div style={{height: '100%'}}>
            <Header name={accountInfo.name} picture={accountInfo.profile_picture_url} bio={accountInfo.biography}/>
            <div className="nav-items">
                    <h1>Dashboard</h1>
                    <li>Red Ocean</li>
                    <li>Blue square</li>
                    <li>Green Tile</li>
            </div>
        </div>
    );
}

export default Nav;