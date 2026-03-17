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
    return(
        <section className="content">
            <div className={s.gallery}>
                <div className={s.image}><img src={screen1.src} width="100%" alt="App Screenshot 1"/></div>
                <div className={s.image}><img src={screen2.src} width="100%" alt="App Screenshot 2"/></div>
                <div className={s.image}><img src={screen3.src} width="100%" alt="App Screenshot 3"/></div>
                <div className={s.image}><img src={screen4.src} width="100%" alt="App Screenshot 4"/></div>
                <div className={s.image}><img src={screen5.src} width="100%" alt="App Screenshot 5"/></div>
                <div className={s.image}><img src={screen6.src} width="100%" alt="App Screenshot 6"/></div>
                <div className={s.image}><img src={screen7.src} width="100%" alt="App Screenshot 7"/></div>
                <div className={s.image}><img src={screen8.src} width="100%" alt="App Screenshot 8"/></div>
            </div>
        </section>
    )
}