import React from 'react';

function Campaign(props) {
    return (
        <div className="campaign">
            <h1>Campaign Name</h1>
            <img style={{borderRadius: '10px'}} height="250px" width="250px" src="https://storage.googleapis.com/adforum-media/34484171/ad_34484171_7856a51019e171e0_web.jpg" alt="" />
            <div className="time-range-select-container">
                <select className="time-range-select">
                    <option>Day</option>
                    <option>Week</option>
                    <option>Month</option>
                </select>
            </div>
        </div>
    );
}

export default Campaign;