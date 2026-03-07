import FeatureImage_de from "../assets/feature_de.png"
import FeatureImage_en from "../assets/feature_en.png"
import FeatureImage_fr from "../assets/feature_fr.png"
import { metadata_featureImageAlt } from "../text/text_metadata"
import type { Language } from "../types/types_global"

interface Props{
    language: Language
}

export default function FeatureImage({language}:Props){

    function getFeatureImage(lang: Language){
        switch(lang){
            case "de":
                return FeatureImage_de.src
            case "en":
                return FeatureImage_en.src
            case "fr":
                return FeatureImage_fr.src
            default: 
                return FeatureImage_en.src
        }
    }

    return (
        <section className="content featureImage">
            <img src={getFeatureImage(language)} width="100%" alt={metadata_featureImageAlt[language]} />
        </section>
    )
}