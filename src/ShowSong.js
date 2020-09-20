import React from 'react'
import './ShowSong.css';
function ShowSong({ song_img, song_name, singer_name}) {
    return (
        <div className="show_song">
            <div className="show_song_bottom">
                <img src={song_img} /><br />
                <span style={{fontSize:"16px"}}>{song_name}</span><br/>
                <div className="a" style={{color:"gray",fontSize:"13px"}}>{singer_name}-{song_name}</div>
            </div>
        </div>
    )
}

export default ShowSong
