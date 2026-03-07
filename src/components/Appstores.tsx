import type { Language } from "../types/types_global"

interface Props{
    language: Language
}

export default function Appstores({language}:Props){

    return (
        <section className="content">
            <div className="badgeContainer">
                <a href={`https://play.google.com/store/apps/details?id=com.m00gendai.arsenal&pli=1&hl=${language}`} target="_blank">
                    <img src={`../src/assets/android_${language}.svg`} width="100%" alt="Google Playstore Download Link" />
                </a>
                <a href={`https://apps.apple.com/app/arsenal-armamentarium/id6670214648`} target="_blank">
                    <img src={`../src/assets/ios_${language}.svg`} width="100%" alt="AppleAppstore Download Link" />
                </a>
            </div>
        </section>
    )
}