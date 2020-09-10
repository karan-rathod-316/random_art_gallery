import React from 'react';
import HeroCard from './HeroCard.js'

function Hero(){
    return (
    <div className="hero-container">
       <HeroCard img={"https://source.unsplash.com/200x200/?abstract"}/>
       <HeroCard img={"https://source.unsplash.com/200x200/?art"}/>
       <HeroCard img={"https://source.unsplash.com/200x200/?creative"}/>
       <HeroCard img={"https://source.unsplash.com/200x200/?vibrant"}/>
       <HeroCard img={"https://source.unsplash.com/200x200/?scenic"}/>
       <HeroCard img={"https://source.unsplash.com/200x200/?painting"}/>
       <HeroCard img={"https://source.unsplash.com/200x200/?photography"}/>
       <HeroCard img={"https://source.unsplash.com/200x200/?minimal"}/>


    </div>
    )
}



export default Hero