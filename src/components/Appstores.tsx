import type { Language } from "../types/types_global"
import androidBadge_de from "../assets/android_de.svg"
import androidBadge_en from "../assets/android_en.svg"
import androidBadge_fr from "../assets/android_fr.svg"
import iosBadge_de from "../assets/ios_de.svg"
import iosBadge_en from "../assets/ios_en.svg"
import iosBadge_fr from "../assets/ios_fr.svg"

interface Props{
    language: Language
}

export default function Appstores({language}:Props){

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
        <section className="content">
            <div className="badgeContainer">
                <a href={`https://play.google.com/store/apps/details?id=com.m00gendai.arsenal&pli=1&hl=${language}`} target="_blank">
                    <img src={getAndroidBadge(language)} width="100%" alt="Google Playstore Download Link" />
                </a>
                <a href={`https://apps.apple.com/app/arsenal-armamentarium/id6670214648`} target="_blank">
                    <img src={getIosBadge(language)} width="100%" alt="AppleAppstore Download Link" />
                </a>
            </div>
        </section>
    )
}