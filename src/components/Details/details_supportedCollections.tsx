import React from "react";
import { section_collectionItems_accessories, section_collectionItems_literature, section_collectionItems_main, section_collectionItems_parts, section_collectionItems_title } from "../../text/text_details";
import type { Language } from "../../types/types_global";
import gunCollectionImage from "../../assets/collections/gunCollection.jpg"
import s from "../../styles/supportedCollections.module.css"

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

   function getAccordionBackground(title: { name: string }){
        if(title?.name){
            switch(title.name){
                case "gunCollection":
                    return gunCollectionImage.src
                case "ammoCollection":
                    return ""
                case "opticCollection":
                    return ""
                case "scopeCollection":
                    return ""
                case "magazineCollection":
                    return ""
                case "silencerCollection":
                    return ""
                case "lightLaserCollection":
                    return ""
                case "conversionCollection":
                    return ""
                case "barrelCollection":
                    return ""
                case "miscAccessoryCollection":
                    return ""
                case "bookCollection":
                    return ""
                default: 
                    return ""
            }
        }
        return ""
    }

    return (
        <>
            <h2>{section_collectionItems_title.title[language]}</h2>
            <p dangerouslySetInnerHTML={{__html: section_collectionItems_title.text[language]}}></p>
            {collections.map((collection, index) => {
                const collectionTitles = collection.text[language].filter(entry => typeof entry !== "object" && entry !== null && !Array.isArray(entry)) as string[]
                const collectionContent = collection.text[language].filter(entry => Array.isArray(entry)) as string[][]
                const collectionName = collection.text[language].filter(entry => typeof entry === "object" && entry !== null && !Array.isArray(entry)) as {name: string}[]
                
                return (
                    <React.Fragment key={`collection_${index}`}>
                        <h3>{collection.title[language]}</h3>
                        <div className={s.container}>
                            {Array.from(new Array(collectionTitles.length)).map((entry, indx) => {
                                return (
                                    <React.Fragment key={`details_${indx}`}>
                                        <div className={s.inner} >
                                            <h4>{`${collectionTitles[indx]}`}</h4>
                                            <ul className={s.list}>
                                                {collectionContent[indx] && collectionContent[indx].map((entry, ind) => {
                                                    return <li key={`accordion_listItem_${ind}`} dangerouslySetInnerHTML={{__html: entry}}></li>
                                                })}
                                            </ul>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                        </div>
                    </React.Fragment>
                )
            })}
        </>
    )
}