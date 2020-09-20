import React from 'react'
import './Dashbord.css';
import TopImage from './TopImage';
import SongList from './SongList';
function Dashbord() {
    return (
        <div className="dashbord">
            <TopImage />
            <div className="song_list">
                <SongList />
            </div>
        </div>
    )
}

export default Dashbord
