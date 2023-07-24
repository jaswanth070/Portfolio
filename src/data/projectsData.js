import results from '../assets/svg/projects/results.svg'
import emergency from '../assets/png/emergency_qr.png'
import getsure from '../assets/png/gesture.gif'
import elibrary from '../assets/png/e_library.png'
import arduino from '../assets/png/Arduino.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'College Results Management',
        projectDesc: "Building a comprehensive student grading and result management system with Django, PostgreSQL, and Python to efficiently manage academic records, automate result processing, and provide valuable insights to enhance educational outcomes.",
        tags: ['Python','Django','PostgreSQL'],
        code: '',
        demo: 'https://sgpv-sample.onrender.com',
        image: results
    },
    {
        id: 2,
        projectName: 'Emergency QR',
        projectDesc: "Emergency QR: A life-saving project that converts user details into QR codes for immediate access during critical situations.",
        tags: ['Python', 'Django', 'Js'],
        code: '',
        demo: 'https://emergency-qr.onrender.com/',
        image: emergency
    },
    {
        id: 3,
        projectName: 'VirtualTech',
        projectDesc: 'A fully virtual control system using hand getures',
        tags: ['Python','ML'],
        code: '',
        demo: '/#',
        image: getsure
    },
    {
        id: 4,
        projectName: 'E-Library',
        projectDesc: 'E-Library: A digital platform revolutionizing access to vast collections of books and resources for readers.',
        tags: ['Python','Django', 'MySQL'],
        code: '',
        demo: 'https://e-library-svwf.onrender.com',
        image: elibrary
    },
    {
        id: 5,
        projectName: 'Arduino Projects',
        projectDesc: 'My various Arduino projects showcase innovative solutions to real-world challenges, blending creativity and technology seamlessly',
        tags: ['Arduino','C++'],
        code: '',
        demo: '/#',
        image: arduino
    }
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/