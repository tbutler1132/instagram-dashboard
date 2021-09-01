import React from 'react';

function Header({bio, name, picture}) {
    return (
        <div className="header" >
            <div className="profile-pic">
                <img style={{borderRadius: '50%'}} height="100px" width="100px" src={picture} alt="" />
            </div>
            <div className="profile-bio" style={{textAlign: 'left'}}>
                <h3>{name}</h3>
                <h5 style={{color: '#808080'}}>{bio}</h5>
            </div>
        </div>
    );
}

export default Header;