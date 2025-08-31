import React from "react";
import memoriesCSS from './../Memories/Memories.module.css';

import MemoriesImg1 from './../../assets/travelport1.jpg';
import MemoriesImg2 from './../../assets/travelport2.jpg';
import MemoriesImg3 from './../../assets/travelport3.jpeg';
import MemoriesImg4 from './../../assets/travelport4.jpg';
import MemoriesImg5 from './../../assets/travelport5.jpg';
import MemoriesImg6 from './../../assets/travelport6.jpeg';
import MemoriesImg7 from './../../assets/travelport7.jpg';
import MemoriesImg8 from './../../assets/travelport8.jpeg';
import MemoriesImg9 from './../../assets/travelport9.jpeg';
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
                <img src={MemoriesImg6} alt="Memories Img 6" />

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
             <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg8} alt="Memories Img 8" />

                <div className={memoriesCSS.content}>
                    <h3>Affordable Dreams</h3>
                    <a href="#">View tours</a>
                </div>
            </div> <div className={memoriesCSS.MemoriesCard}>
                <img src={MemoriesImg9} alt="Memories Img 9" />

                <div className={memoriesCSS.content}>
                    <h3>Affordable Dreams</h3>
                    <a href="#">View tours</a>
                </div>
            </div>
        </div>

    )
}

export default Memories;