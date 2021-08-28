import React from 'react';

function Header(props) {
    return (
        <div className="header" >
            <div className="profile-pic">
                <img style={{borderRadius: '50%'}} height="100px" width="100px" src="https://media1.popsugar-assets.com/files/thumbor/MohUGSNouUM519bcWBOvI2KJxrw/63x209:3000x3146/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/892/n/1922398/5464118c5e430dc44c8e90.01444488_/i/Alicia-Keys.jpg" alt="" />
            </div>
            <div className="profile-bio" style={{textAlign: 'left'}}>
                <h3>Alicia Keys</h3>
                <h5 style={{color: '#000'}}>akeys11@gmail.com</h5>
            </div>
        </div>
    );
}

export default Header;