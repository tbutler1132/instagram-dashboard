import Header from "./Header";
import {useEffect, useState} from 'react'
import axios from "axios";
import hamburger from '../icons8-menu-24.png'

function Nav({token, instagramId, logoutHandler}) {

    const [accountInfo, setAccountInfo] = useState({})

    useEffect(() => {
        if(token){
            const getData = async () => {
                const account = await axios.get(`https://graph.facebook.com/v11.0/${instagramId}?access_token=${token}&fields=biography,name,profile_picture_url`)
                setAccountInfo(account.data) 
            }
           getData()
        }
    }, [token, instagramId])

    return (
        <div className="nav-container">
            <Header name={accountInfo.name} picture={accountInfo.profile_picture_url} bio={accountInfo.biography}/>
            <div className="nav-items">
                    <h1>Dashboard</h1>
                    <li className="nav-link">Insights</li>
                    <li className="nav-link">Competitors</li>
                    <li className="nav-link">Invitations</li>
                    <small onClick={logoutHandler} className="nav-link" id="logout-button">Logout</small>
            </div>
            <img id="hamburger-button" src={hamburger} alt="" />
        </div>
    );
}

export default Nav;