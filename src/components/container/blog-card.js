import { makeStyles } from '@mui/styles';
import React from 'react';
import BlogCardUI from '../core-ui/blog/blog-card/blog-card';

const BlogCard = ({ id, title,description,image,url  ,year,theme }) => {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: 'all 0.2s',
      '&:hover': {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: 'scale(1.1)',
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: '1.1rem',
      transition: 'all 0.2s',
      '&:hover': {},
    },
  }));

  const classes = useStyles();

  return (
    <BlogCardUI
      classes={classes}
      id={id}
      title={title}
      description={description}
      //   code={code}
      url={url}
      image={image}
      year={year}
      theme={theme}
    />
  );
};

export default BlogCard;