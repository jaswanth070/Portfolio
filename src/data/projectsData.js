import seven from '../assets/svg/projects/seven.svg'
import six from '../assets/svg/projects/six.svg'
import food from '../assets/png/food.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Bus Managment System',
        projectDesc: "To store and manage the details about the bus and users in the college .To allocate the buses according to the location specified by the users",
        tags: ['PHP', 'MySQL'],
        code: 'https://github.com/parimalavasipalli10/bus-management',
        demo: 'https://www.aylanetworks.com/',
        image: six
    },
    {
        id: 2,
        projectName: 'Human Action Recognition',
        projectDesc: 'This Project compares two hand-crafted feature extraction techniques like SIFT and Optical Flow with SVM classifier on KTH dataset. The experimental results of our approach gives an accuracy of 74.34% for SIFT and 84.37% for Optical Flow',
        tags: ['Python', 'ML', 'Open CV'],
        code: 'https://github.com/parimalavasipalli10/human_action_recognition',
        demo: '',
        image: seven
    },
    {
        id: 3,
        projectName: 'Q FoodZ',
        projectDesc: 'QFoodZ is a food ordering website that delivers food to your doorstep within a 5km range. If the order is beyond the 5km range, the owner who ordered it will need to collect the order',
        tags: ['React', 'Django', 'MySQL'],
        code: 'https://github.com/parimalavasipalli10/Q-FoodZ',
        demo: 'https://travel-agency-fc58b.web.app/',
        image: food
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