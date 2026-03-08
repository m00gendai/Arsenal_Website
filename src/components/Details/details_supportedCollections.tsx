import React from "react";
import { section_collectionItems_accessories, section_collectionItems_literature, section_collectionItems_main, section_collectionItems_parts, section_collectionItems_title } from "../../text/text_details";
import type { Language } from "../../types/types_global";

interface Props{
    language: Language
}

export default function Details_supportedCollections({language}:Props){

    const collections = [
        section_collectionItems_main, 
        section_collectionItems_accessories, 
        section_collectionItems_parts, 
        section_collectionItems_literature
    ]

    return (
        <>
            <h2>{section_collectionItems_title.title[language]}</h2>
            <p dangerouslySetInnerHTML={{__html: section_collectionItems_title.text[language]}}></p>
            {collections.map((collection, index) => {

                const collectionTitles = collection.text[language].filter(entry => !Array.isArray(entry))
                const collectionContent = collection.text[language].filter(entry => Array.isArray(entry))

                return (
                    <React.Fragment key={`collection_${index}`}>
                        <h3>{collection.title[language]}</h3>
                        <div className="accordionContainer">
                            {Array.from(new Array(collectionTitles.length)).map((entry, indx) => {
                                return (
                                    <details key={`details_${indx}`}>
                                        <summary>
                                            {collectionTitles[indx]}
                                        </summary>
                                        <div className="accordionContent">
                                            <ul>
                                                {collectionContent[indx] && collectionContent[indx].map((entry, ind) => {
                                                    return <li key={`accordion_listItem_${ind}`} dangerouslySetInnerHTML={{__html: entry}}></li>
                                                })}
                                            </ul>
                                        </div>
                                    </details>
                                )
                            })}
                        </div>
                    </React.Fragment>
                )
            })}
        </>
    )
}