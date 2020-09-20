import React, { Component } from 'react'
import './TopImage.css';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';

export default class TopImage extends Component {
    constructor()
    {
        super();
        this.state=({
            currentImage:0,
            slide:["https://img.wynk.in/unsafe/720x251/filters:no_upscale():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/5f64661778475c44322a6526/BANNER_7435068331017221.png",
                    "https://img.wynk.in/unsafe/720x251/filters:no_upscale():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/5f62e99b18846924a453f72c/BANNER_586771343518439.png",
                    "https://img.wynk.in/unsafe/720x251/filters:no_upscale():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/5f606d0ecc92b41de51f245f/BANNER_1899686867866337.png",
                    "https://img.wynk.in/unsafe/720x251/filters:no_upscale():format(webp)/https://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/5f5b73e518846924a453f5e8/BANNER_97832801552774.png",
                    "https://img.wynk.in/unsafe/720x251/filters:no_upscale():format(webp)/http://s3.ap-south-1.amazonaws.com/discovery-prod-arsenal/arsenal/artworks/5f5f4cc2129bc2539f110d98/BANNER_1826009251822553.png"
            ]
        })
    }   
    render() {
        return (
          <div className="top_image_sliding">
                <Slide>
                    <div className="each-slide">
                       <img src={`${this.state.slide[0]}`} /> 
                    </div>
                    <div className="each-slide">
                        <img src={`${this.state.slide[1]}`} />
                    </div>
                    <div className="each-slide">
                        <img src={`${this.state.slide[2]}`} />
                    </div>
                    <div className="each-slide">
                        <img src={`${this.state.slide[3]}`} />
                    </div>
                    <div className="each-slide">
                        <img src={`${this.state.slide[4]}`} />
                    </div>
                </Slide>
            </div>
        )
    }
}
{/*  */}