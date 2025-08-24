import React from "react";
import memoriesCSS from './../Memories/Memories.module.css';

import MemoriesImg1 from './../../assets/travelport1.jpg';
import MemoriesImg2 from './../../assets/travelport2.jpg';
import MemoriesImg3 from './../../assets/travelport3.jpg';
import MemoriesImg4 from './../../assets/travelport4.jpg';
import MemoriesImg5 from './../../assets/travelport5.jpg';

import MemoriesImg7 from './../../assets/travelport7.jpg';
function Memories() {
    return (
        <div className={`${memoriesCSS.Memories_wrapper} section`}>
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg1} alt="Memories Img 1" />

                <div className={memoriesCSS.content}>
                    <h3>Small group Depurtures</h3>
                    <a href="#">View tours</a>
                </div>
            </div>
                <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg2} alt="Memories Img 2" />

                <div className={memoriesCSS.content}>
                    <h3>Affordable Dreams</h3>
                    <a href="#">View tours</a>
                </div>
            </div>
                <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg3} alt="Memories Img 3" />

                <div className={memoriesCSS.content}>
                    <h3>Undiscover Tourse</h3>
                    <a href="#">View tours</a>
                </div>
            </div>    
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg4} alt="Memories Img 4" />

                <div className={memoriesCSS.content}>
                    <h3>Let Our Experts,<br />Plan Your Trip</h3>
                    <button href="#">View tours</button>
                </div>
            </div>    
            <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg5} alt="Memories Img 5" />

                <div className={memoriesCSS.content}>
                    <h3>Affordable Dreams</h3>
                    <a href="#">View tours</a>
                </div>
            </div>    
            
               <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg7} alt="Memories Img 7" />

                <div className={memoriesCSS.content}>
                    <h3>Affordable Dreams</h3>
                    <a href="#">View tours</a>
                </div>
            </div>
        </div>

    )
}

export default Memories;