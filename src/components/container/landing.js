import { makeStyles } from '@mui/styles';
import React, { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import LandingUI from '../core-ui/landing/landing-ui';
import gsap from 'gsap';

const Landing = () => {
  const { theme, drawerOpen } = useContext(ThemeContext);

  // Reference to the canvas element
  const canvasRef = useRef(null);
  

  // Function to initialize and run the particle animation
  const initParticleAnimation = () => {
    /*--------------------
Settings
--------------------*/
    const palette = [
      '#21272f',
      '#ffbd36',
      '#ff2629',
      '#00abe5'
    ];

    /*--------------------
    Svg
    --------------------*/
    const svg = document.querySelector('.followers');
    const svg2 = svg.cloneNode(true);
    const svg3 = svg.cloneNode(true);
    document.body.appendChild(svg2);
    document.body.appendChild(svg3);
    svg2.classList.add('stroke');
    svg3.classList.add('shadow');

    /*--------------------
    Setup
    --------------------*/
    
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const win = {
      w: window.innerWidth,
      h: window.innerHeight
    };

    const mouse = {
      x: win.w / 2,
      y: win.h / 2
    };

    let time = 0;
    let devicePixelRatio = window.devicePixelRatio || 1;
    const minArc = window.innerWidth > 500 ? 3 : 1;

    /*--------------------
    Particle
    --------------------*/
    class Particle {
      constructor({ x, y }) {
        this.x = x;
        this.y = y;
        this.alpha = 100;
        this.arc = minArc + Math.random() * 3;
        this.color = palette[Math.floor(Math.random() * palette.length)];
        this.arcX = minArc + Math.random() * 2;
        this.arcY = minArc + Math.random() * 2;
        this.offset = -2 + Math.random() * 4;
      }
      draw(t) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.newX, this.newY, this.arc, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        this.newX = this.x + this.arcX * Math.sin(t * this.offset);
        this.newY = this.y + this.arcY * Math.cos(t * this.offset);
      }
    }

    /*--------------------
    Settings
    --------------------*/
    let Particles = [];
    const num = 20000;
    let i = 0;

    /*--------------------
    Clear
    --------------------*/
    const clear = () => {
      ctx.clearRect(0, 0, win.w, win.h);
    };

    /*--------------------
    Draw
    --------------------*/
    const draw = () => {
      const t = window.performance.now() * 0.001;
      Particles.forEach((p, i) => {
        p.draw(t);
      });
    };

    /*--------------------
    Animate
    --------------------*/
    const animate = () => {
      time += 0.1;
      clear();
      draw();
      requestAnimationFrame(animate);
      
    };

    /*--------------------
    Loop
    --------------------*/
    let n = 0;
    const loop = () => {
      for (let i = 0; i < num - 1; i++) {
        const x = Math.round(Math.random() * win.w);
        const y = Math.round(Math.random() * win.h);
        if (ctx.getImageData(x, y, 1, 1).data[3] == 255) {
          Particles.push(new Particle({ x, y }));
          n++;
        }
      }
      animate();
      gsap.from(Particles, {
        x: win.w / 2,
        duration: 1.4,
        ease: 'power3.inOut',
        stagger: -.001,
        // onComplete: removeParticles,
      });
      
      gsap.from(Particles, {
        y: -10,
        a: 0,
        duration: 1.4,
        ease: 'power2.inOut',
        stagger: -.001,
        // onComplete: removeParticles,
      });
      
      gsap.to('.followers', {
        strokeDashoffset: '0px',
        ease: 'sine.out',
        duration: 5,
        delay: 2,
        onComplete: removeParticles,
      });

    };
    
    const removeParticles = () => {
      const lan_div = document.getElementsByClassName('landing')[0]
      lan_div.removeChild(canvas)
    };
   
    /*--------------------
    Init
    --------------------*/
    const init = () => {
      ctx.save();
      ctx.translate(win.w / 2, win.h / 2);
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = `bold ${win.w * 0.31}px Arial, Helvetica, sans-serif`;
      ctx.fillText('Welcome', 0, 0);
      ctx.restore();
      ctx.scale(devicePixelRatio, devicePixelRatio);
      Particles = [];
      loop();
    };
    init();
    // removeParticles();

    /*--------------------
    Resize
    --------------------*/
    const onResize = () => {
      devicePixelRatio = window.devicePixelRatio || 1;
      win.w = window.innerWidth;
      win.h = window.innerHeight;
      canvas.width = win.w * devicePixelRatio;
      canvas.height = win.h * devicePixelRatio;
      canvas.style.width = `${win.w}px`;
      canvas.style.height = `${win.h}px`;
      init();
    };
    onResize();

    /*--------------------
    Listeners
    --------------------*/
    window.addEventListener('resize', onResize);

  };

  // Run the particle animation when the component mounts
  // useEffect(() => {
  //   initParticleAnimation();
  // }, []);

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      backgroundColor: theme.secondary,
      borderRadius: '30px',
      textTransform: 'inherit',
      textDecoration: 'none',
      width: '150px',
      fontSize: '1rem',
      fontWeight: '500',
      height: '50px',
      fontFamily: 'var(--primaryFont)',
      border: `3px solid ${theme.primary}`,
      transition: '500ms ease-out',
      '&:hover': {
        backgroundColor: theme.buttonColor,
        color: theme.secondary,
        border: `3px solid ${theme.buttonColor}`,
      },
      [t.breakpoints.down('sm')]: {
        width: '180px',
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: '30px',
      textTransform: 'inherit',
      textDecoration: 'none',
      width: '150px',
      height: '50px',
      fontSize: '1rem',
      fontWeight: '500',
      fontFamily: 'var(--primaryFont)',
      border: `3px solid ${theme.primary}`,
      transition: '500ms ease-out',
      '&:hover': {
        backgroundColor: theme.buttonColor,
        color: theme.secondary,
        border: `3px solid ${theme.buttonColor}`,
      },
      [t.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  }));

  const classes = useStyles();

  return (
    <LandingUI drawerOpen={drawerOpen} theme={theme} classes={classes}>
      
    </LandingUI>
  );
};

export default Landing;