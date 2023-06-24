import React from 'react';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
// import { blogData } from '../../../data/blogData';
import { blogData } from '../../../data/blogData';
import BlogCard from '../../container/blog-card';
import './blog.css';

function BlogUI({ theme, classes }) {

    return (
        <>
            {blogData.length > 0 && (
                <div className="projects" id="blog" style={{ backgroundColor: theme.secondary }}>
                    <div className="projects--header">
                        <h1 style={{ color: theme.primary }}>Certifications</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--bodyContainer">
                            {blogData.slice(0, 3).map(project => (
                                <BlogCard
                                    theme={theme}
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    // tags={project.tags}
                                    // code={project.code}
                                    image={project.image}
                                    url={project.url}
                                />
                            ))}
                        </div>
                        {blogData.length > 3 && (
                            <div className="blog--viewAll">
                                <Link to="/blog">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}

                        {/* {blogData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        View All
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )} */}
                    </div>
                </div>
            )}

        </>
    )
}

export default BlogUI
