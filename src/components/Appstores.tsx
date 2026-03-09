import type { Language } from "../types/types_global"
import androidBadge_de from "../assets/android_de.svg"
import androidBadge_en from "../assets/android_en.svg"
import androidBadge_fr from "../assets/android_fr.svg"
import iosBadge_de from "../assets/ios_de.svg"
import iosBadge_en from "../assets/ios_en.svg"
import iosBadge_fr from "../assets/ios_fr.svg"
import s from "../styles/appstores.module.css"
import { starsText } from "../text/text_appstores"

interface Props{
	language: Language
    userRatingCount: number
    averageUserRating: number
}

export default function Appstores({language, userRatingCount, averageUserRating}:Props){

    const percentRating = averageUserRating*20
    const ratingText = `${starsText[language].replace("{{{A}}}", averageUserRating.toString()).replace("{{{B}}}", userRatingCount.toString())}`

    function getAndroidBadge(lang: Language){
        switch(lang){
            case "de":
                return androidBadge_de.src
            case "en":
                return androidBadge_en.src
            case "fr":
                return androidBadge_fr.src
            default:
                return androidBadge_en.src
        }
    }

    function getIosBadge(lang: Language){
        switch(lang){
            case "de":
                return iosBadge_de.src
            case "en":
                return iosBadge_en.src
            case "fr":
                return iosBadge_fr.src
            default:
                return iosBadge_en.src
        }
    }

    return (
        <section className="content fullWidth highLight">
            <div className={s.container}>
                <a className={`${s.badge} ${s.android}`} href={`https://play.google.com/store/apps/details?id=com.m00gendai.arsenal&pli=1&hl=${language}`} target="_blank">
                    <img src={getAndroidBadge(language)} width="100%" alt="Google Playstore Download Link" />
                </a>
                <div className={`${s.rating} desktop`} title={ratingText}>
                    <div className={s.star}>
                        <span className={s.stars} style={{
                            background: `linear-gradient(90deg, #ffd700 0%, #ffed4e ${percentRating/2}%, #ffd700 ${percentRating}%, rgb(255, 251, 255) ${percentRating}%, rgb(255, 251, 255) 100%)`,
                            backgroundClip: "text"
                        }}>
                        ★★★★★</span>
                    </div>
                    <div className={s.text}>
                        <span>{ratingText}</span>
                    </div>
                </div>
                <a className={s.badge} href={`https://apps.apple.com/app/arsenal-armamentarium/id6670214648`} target="_blank">
                    <img src={getIosBadge(language)} width="100%" alt="AppleAppstore Download Link" />
                </a>
                <div className={`${s.rating} mobile`} title={ratingText}>
                    <div className={s.star}>
                        <span className={s.stars} style={{
                            background: `linear-gradient(90deg, #ffd700 0%, #ffed4e ${percentRating/2}%, #ffd700 ${percentRating}%, rgb(255, 251, 255) ${percentRating}%, rgb(255, 251, 255) 100%)`,
                            backgroundClip: "text"
                        }}>
                        ★★★★★</span>
                    </div>
                    <div className={s.text}>
                        <span>{ratingText}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}