import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { ThemeContext } from '../../../contexts/theme-context';
import { galleryData } from '../../../data/galleryData';
import { galleryImage } from '../../../utils/galleryImage';
import './gallary.css';

function Gallary() {
    const { theme } = useContext(ThemeContext);

    const galleryBoxStyle = {
        backgroundColor: theme.secondary,
        boxShadow: `0px 0px 12px ${theme.primary}`
    }

    return (
        <div className="skills" style={{ backgroundColor: theme.secondary }}>
            <div className="skillsHeader">
                <h2 style={{ color: theme.primary }}>Gallery</h2>
            </div>
            <div className="skillsContainer">
                <div className="skill--scroll">
                    <Marquee
                        gradient={false}
                        speed={80}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="left"
                    >
                        {galleryData.map((skill, id) => 
                        (
                            <div className="gallery--box" key={id} style={galleryBoxStyle}>
                                <img src={galleryImage(skill)} alt={skill} />
                                {/* <h3 style={{ color: theme.tertiary }}>
                                    {skill}
                                </h3> */}
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default Gallary
