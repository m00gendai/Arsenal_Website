import { faq } from "../../text/text_faq"
import type { Language } from "../../types/types_global"
import s from "../../styles/accordion.module.css"

interface Props{
    language: Language
}

export default function Faq_accordions({language}:Props){
    return(
        <div className={s.container}>
            {faq.map((entry, index) => {
                return(
                    <details className={s.details} key={`entry_${index}`}>
                        <summary className={s.summary}>
                            {entry.question[language]}
                        </summary>
                        <div className={s.content}>
                            {entry.answer[language].map((answer, indx) => {
                                if(Array.isArray(answer)){
                                    return(
                                        <ul className={s.list} key={`faq_ul_${indx}`}>
                                            {answer.map((listItem, idx) => {
                                                return <li key={`faq_listItem_${idx}`} dangerouslySetInnerHTML={{__html: listItem}}></li>
                                            })}
                                        </ul>
                                    )
                                } else {
                                    return <p className={s.text} key={`faq_answer_${indx}`} dangerouslySetInnerHTML={{__html: answer}}></p>
                                }                   
                            })}
                        </div>
                    </details>
                )
            })} 
        </div>
    )
}