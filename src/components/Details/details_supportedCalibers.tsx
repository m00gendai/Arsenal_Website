import { calibers } from "../../lib/caliberData";
import { section_supportedCalibers } from "../../text/text_details";
import type { Language } from "../../types/types_global";

interface Props{
    language: Language
}

export default function Details_supportedCalibers({language}:Props){
    return(
        <>
            <h2>{section_supportedCalibers.title[language]}</h2>
            {section_supportedCalibers.text[language].map((text, index) => {
                return <p key={`text_index${index}`} dangerouslySetInnerHTML={{__html: text}}></p>
            })}

            <div className="accordionContainer">
                {calibers.map((range, index) => {
                    return(
                        <details key={`range_${index}`}>
                            <summary>
                                {range.range}
                            </summary>
                            <div className="accordionContent">
                                <ul>
                                    {range.variants.map((caliber, indx) => {
                                        return <li key={`caliber_${range}_${indx}`}>{caliber.name}</li>
                                    })}
                                </ul>
                            </div>
                        </details>
                    )
                })} 
            </div>
        </>
    )
}