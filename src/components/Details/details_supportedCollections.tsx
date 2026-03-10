import React from "react";
import { section_collectionItems_accessories, section_collectionItems_literature, section_collectionItems_main, section_collectionItems_parts, section_collectionItems_title } from "../../text/text_details";
import type { Language } from "../../types/types_global";
import gunCollectionImage from "../../assets/collections/gunCollection.jpg"
import feature from "../../assets/feature_de.png"

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
                    return feature.src
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
                        <div className="accordionContainer">
                            {Array.from(new Array(collectionTitles.length)).map((entry, indx) => {
                                console.log(collectionTitles[indx])
                                return (
                                    <details className="collectionAccordion" key={`details_${indx}`}>
                                        <summary style={{
                                        backgroundImage: `url(${ getAccordionBackground(collectionName[indx])})`,
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundRepeat: "no-repeat",
                                        backgroundAttachment: "scroll",
                                        }}>
                                            <span className="collectionAccordionScaffold">{`${collectionTitles[indx]}`}</span>
                                            <span className="collectionAccordionTitle">{`${collectionTitles[indx]}`}</span>
                                            <span className="collectionAccordionTitleBack">{`${collectionTitles[indx]}`}</span>
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