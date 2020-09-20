import React from 'react'
import './SongList.css';
import ShowSong from './ShowSong'
function SongList() {
    return (
        <div className="song_list">
            <div className="punjabi_song">
                <div className="show_song_top">
                    <h2>Latest Punjabi</h2>
                    <p>See All</p>
                </div>
                <div className="all_songs">
                    <ShowSong 
                        song_img="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616408804910/1599658507/srch_believe_A10320WT035778298P.jpg"
                        song_name="Pyaar Mangdi"
                        singer_name="Jassie Gill"
                    />
                    <ShowSong 
                        song_img="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/KhayaalRakhyaKar.jpeg"
                        song_name="Khyaal Rakhya Kar"
                        singer_name="Desi Music Factory"
                    />
                    <ShowSong 
                        song_img="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1539940970/srch_venus_FR-96X-18-65569.jpg"
                        song_name="Sakhiyaan"
                        singer_name="Maninder Buttar"
                    />
                    <ShowSong 
                        song_img="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1545734646/srch_gkdigital_ING501801337.jpg"
                        song_name="Nira Ishq"
                        singer_name="Guri"
                    />
                    <ShowSong 
                        song_img="https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/https://img.wynk.in/unsafe/275x275/filters:no_upscale():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/itunes%20Jass%20manak.jpg"
                        song_name="Viah"
                        singer_name="Jass Manak"
                    />
                </div>
            </div>
        </div>
    )
}

export default SongList;
