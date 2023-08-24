import tech_fest_1 from '../assets/gallery/tech_fest_1.jpg'
import tech_fest_2 from '../assets/gallery/tech_fest_2.jpg'
import music_1 from '../assets/gallery/music_1.jpg'
import music_2 from '../assets/gallery/music_2.jpg'
import chandrayaan_1 from '../assets/gallery/chandrayaan_3_1.jpg'
import chandrayaan_2 from '../assets/gallery/chandrayaan_3_2.jpg'
import chandrayaan_3 from '../assets/gallery/chandrayaan_3_3.jpg'

export const galleryImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'tech_fest_1':
            return tech_fest_1;
        case 'tech_fest_2':
            return tech_fest_2;
        case 'music_1':
            return music_1;
        case 'music_2':
            return music_2;

        case 'chandrayaan_1':
            return chandrayaan_1;
        case 'chandrayaan_2':
            return chandrayaan_2;
        case 'chandrayaan_3':
            return chandrayaan_3;
        default:
            break;
    }
}
