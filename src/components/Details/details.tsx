import { title } from "../../text/details"
import type { Language } from "../../types/types_global"
import Details_supportedCalibers from "./details_supportedCalibers"

interface Props{
    language: Language
}

export default function Details({language}:Props){
    return (
        <section className="content" id="details">
            <h2>{title[language]}</h2>

            <Details_supportedCalibers language={language} />
        </section>
    )
}