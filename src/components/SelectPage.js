import axios from "axios";
import { useEffect, useState } from "react";

function SelectPage({token, pageHandler}) {

    const [pages, setPages] = useState([])

    useEffect(() => {
        if(token){
            const getData = async () => {
                const userPages = await axios.get(`https://graph.facebook.com/v11.0/me/accounts?access_token=${token}`)
                console.log(userPages)
                setPages(userPages.data.data)
            }
           getData()
        }
    }, [token])

    console.log(pages)

    const renderPages = () => {
        return pages.map(pages => <p value={pages.id} onClick={() => pageHandler(pages.id)} key={pages.id}>{pages.name}</p>)
    }

    if(!pages) return null
    return (
        <div>
            <h1>Select which page you want to view</h1>
            {renderPages()}
        </div>
    );
}

export default SelectPage;