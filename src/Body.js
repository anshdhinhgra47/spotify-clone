import React from 'react';
import './Body.css';
import Header from './Header';


function Body({ spotify }) {
    return (
        <div className="body">
           <Header spotify={spotify} />

           <div className="body__info">
                <img src="https://newjams-images.scdn.co/v2/discover-weekly/aAbca4VNfzWuUCQ_FGiEFA==/bmVuZW5lbmVuZW5lbmVuZQ==/default" alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Description.....</p>
                </div>
           </div>
        </div>
    )
}

export default Body;
