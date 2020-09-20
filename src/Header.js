import React from 'react';
import './Header.css';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import SearchIcon from '@material-ui/icons/Search';
import TranslateIcon from '@material-ui/icons/Translate';
function Header() {
    return (
        <div className="header">
            <img src="https://wynk.in/assets/images/Wynklogo-white.svg" />
            <div className="header_left">
                <div className="header_link_option">
                    <span>HOME</span>
                </div>
                <div className="header_link_option">
                    <div className="mymusic">
                        <span>MY MUSIC</span>
                        <div className="dropdown_contant_myMusic">
                            <h3>My Playlist</h3>
                            <h3>Recently Played Song</h3>
                            <h3>Followed Artists</h3>
                            <h3>Followed Playlists</h3>
                            <h3>Recommended Song</h3>
                            <h3>Download</h3> 
                        </div>
                    </div>
                </div>
                <div className="header_link_option">
                    <span>DOWNLOAD APP</span>
                </div>
            </div>
            <div className="header_input">
                <SearchIcon />
                <input type="text" placeholder="Search for music you love!" />
            </div>
            <div className="header_right">
                <div className="header_right_link">
                    <Brightness3Icon />
                </div>
                <div className="header_right_link">
                    <TranslateIcon />
                </div>
                <div className="header_right_link">
                    <span>SIGN IN</span>
                </div>                
            </div>
        </div>
    )
}

export default Header
