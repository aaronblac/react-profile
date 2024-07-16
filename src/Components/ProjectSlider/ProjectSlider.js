import React from 'react';
import projectsData from '../../projectsData';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import styles from './ProjectSlider.module.scss'
import Slider from "react-slick";
 

const ProjectSlider = () => {

   const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      waitForAnimate: false
   };

   return(
        <div className='slider-container' >
            <div className='d-flex flex-column align-content-center my-3'>
                <h2 className='d-flex justify-content-center mb-3'>Projects</h2>
                <Slider {...settings}>
                    {projectsData.map((project,index)=>(
                        <div className={styles.proj} key={index}>
                            <div className={` ${styles.projContainer} card pt-4 px-4 ` }>
                                <div className={` ${styles.projContents} gap-3 pb-4` }>
                                    <div>
                                        <h2>{project.title}</h2>
                                        <p>{project.description}</p>
                                    </div>
                                    <img src={project.image} alt={project.alt}/>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
   )
};


export default ProjectSlider;
