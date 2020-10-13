import React from 'react';
import './Body.css';
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/FavoriteOutlined';
import MoreHorizonIcon from '@material-ui/icons/MoreHorizOutlined';
import SongRow from './SongRow';

function Body({ spotify }) {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    return (
        <div className="body">
           <Header spotify={spotify} />

           <div className="body__info">
                <img 
                src={discover_weekly?.images[0].url}
                alt="" 
                />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
           </div>

           <div className="body__songs">
                <div className="body__icon">
                    <PlayCircleFilledIcon className="body_shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizonIcon />
                </div>

            {discover_weekly?.tracks.items.map(item => (
                <SongRow track={item.track} />
            ))}

           </div>
        </div>
    )
}

export default Body;
