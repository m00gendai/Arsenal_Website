import { faq } from "../../text/text_faq"
import type { Language } from "../../types/types_global"

interface Props{
    language: Language
}

export default function Faq_accordions({language}:Props){
    return(
        <div className="accordionContainer">
            {faq.map((entry, index) => {
                return(
                    <details key={`entry_${index}`}>
                        <summary>
                            {entry.question[language]}
                        </summary>
                        <div className="accordionContent">
                            {entry.answer[language].map((answer, indx) => {
                                if(Array.isArray(answer)){
                                    return(
                                        <ul key={`faq_ul_${indx}`}>
                                            {answer.map((listItem, idx) => {
                                                return <li key={`faq_listItem_${idx}`} dangerouslySetInnerHTML={{__html: listItem}}></li>
                                            })}
                                        </ul>
                                    )
                                } else {
                                    return <p style={{margin: "1rem"}} key={`faq_answer_${indx}`} dangerouslySetInnerHTML={{__html: answer}}></p>
                                }                   
                            })}
                        </div>
                    </details>
                )
            })} 
        </div>
    )
}