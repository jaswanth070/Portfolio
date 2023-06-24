import React from 'react';
import { FaLinkedin, FaPlay } from 'react-icons/fa';
import view_dark from '../../../../assets/svg/projects/view_dark.svg'
import view_light from '../../../../assets/svg/projects/view_light.svg'
import Fade from 'react-reveal/Fade';
import placeholder from '../../../../assets/png/placeholder.png';
import './blog-c.css';

function BlogCardUI({ id, title,description,url,image,year,theme }) {
    return (
        <Fade bottom>
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.quaternary }}
            >
                    <a
                        href={url}
                        target='_blank'
                        rel='noreferrer'
                        // className={classes.iconBtn}
                        aria-labelledby={`${title
                            .replace(' ', '-')
                            .toLowerCase()} ${title
                                .replace(' ', '-')
                                .toLowerCase()}-demo`}
                    >
                <div className='projectContent'>
                    <h2
                        id={title.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {title}
                    </h2>
                    <img src={image ? image : placeholder} alt={title} />
                    <div className='project--showcaseBtn'>
                            {/* <FaLinkedin
                                id={`${title
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                                // className={classes.icon}
                                aria-label='Demo'
                            /> */}
                            <img src={theme.type === 'light' ? view_light : view_dark} alt="" />
                            
                    </div>
                </div>
                    </a>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {description}
                </p>
                {/* <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                        <span key={id}>{year}</span>
                    
                </div> */}
            </div>
        </Fade>
    );
}

export default BlogCardUI;
