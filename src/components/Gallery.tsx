import screen1 from '../assets/screen1.jpg';
import screen2 from '../assets/screen2.jpg';
import screen3 from '../assets/screen3.jpg';
import screen4 from '../assets/screen4.jpg';
import screen5 from '../assets/screen5.jpg';
import screen6 from '../assets/screen6.jpg';
import screen7 from '../assets/screen7.jpg';
import screen8 from '../assets/screen8.jpg';
import s from "../styles/gallery.module.css"

export default function Gallery(){

    const images = [screen1, screen2, screen3, screen4, screen5, screen6, screen7, screen8]

    return(
        <section className="content">
            <div className={s.gallery}>
                {images.map((image, index) => {
                    return (
                        <div 
                        key={`image_screen_${index}`}
                            className={s.image} 
                            style={{
                                aspectRatio: `${image.width/image.height}/1`
                            }}
                        >
                            <img loading="lazy" src={image.src} alt={`App Screenshot ${index+1}`}/>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}