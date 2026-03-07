import { title } from "../../text/text_faq"
import type { Language } from "../../types/types_global"
import Faq_accordions from "./faq_accordions"

interface Props{
    language: Language
}

export default function Details({language}:Props){
    return (
        <section className="content" id="faq">
            <h2>{title[language]}</h2>
            <Faq_accordions language={language} />
        </section>
    )
}