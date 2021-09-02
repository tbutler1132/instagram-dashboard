import axios from "axios";
import { useEffect, useState } from "react";

function SelectPage({token, pageHandler}) {

    const [pages, setPages] = useState([])

    useEffect(() => {
        if(token){
            const getData = async () => {
                const userPages = await axios.get(`https://graph.facebook.com/v11.0/me/accounts?access_token=${token}`)
                setPages(userPages.data.data)
            }
           getData()
        }
    }, [token])


    const renderPages = () => {
        return pages.map(pages => <div className="page-option"><p key={pages.id} onClick={() => pageHandler(pages.id)} key={pages.id}>{pages.name}</p></div>)
    }

    if(!pages) return null
    return (
        <div>
            <h1>Facebook Page</h1>
            <h4>Select the Facebook page connected to the Instagram account you want to view</h4>
            <div className="page-list">
                {renderPages()}
            </div>
        </div>
    );
}

export default SelectPage;