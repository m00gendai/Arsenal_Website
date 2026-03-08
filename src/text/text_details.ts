import { getCaliberCount } from "../lib/caliberData";
import { ammoCollection, barrelCollection, bookCollection, conversionCollection, gunCollection, lightLaserCollection, magazineCollection, miscAccessoryCollection, opticCollection, scopeCollection, silencerCollection } from "../lib/itemData";
import { dataTemplate_Translations, excludedKeysForDataTemplates, tabBarLabels } from "../lib/itemData_translations";
import type { Language, SimpleTranslation, SimpleTranslation_StringArray } from "../types/types_global";

interface Section{
    title: SimpleTranslation
    text: SimpleTranslation_StringArray
}

export const title: SimpleTranslation ={
    de: "Details",
    en: "Details",
    fr: "Détails",
}

function getTranslatedData(fields: string[], lang: Language){
    const translations = Object.keys(dataTemplate_Translations)
        .filter(field => fields.includes(field) && !excludedKeysForDataTemplates.includes(field))
        .map(field => dataTemplate_Translations[field][lang])
            
    return translations
}

function getTranslatedTitle(type: keyof tabBarLabels, lang: Language){
    return tabBarLabels[type][lang]
}

function buildSectionMain(lang: Language) {
    return [
        getTranslatedTitle("gunCollection", lang),
        getTranslatedData(gunCollection, lang),
        getTranslatedTitle("ammoCollection", lang),
        getTranslatedData(ammoCollection, lang),
    ]
}

function buildSectionAccessories(lang: Language) {
    return [
        getTranslatedTitle("silencerCollection", lang),
        getTranslatedData(silencerCollection, lang),
        getTranslatedTitle("opticCollection", lang),
        getTranslatedData(opticCollection, lang),
        getTranslatedTitle("scopeCollection", lang),
        getTranslatedData(scopeCollection, lang),
        getTranslatedTitle("lightLaserCollection", lang),
        getTranslatedData(lightLaserCollection, lang),
        getTranslatedTitle("magazineCollection", lang),
        getTranslatedData(magazineCollection, lang),
        getTranslatedTitle("miscAccessoryCollection", lang),
        getTranslatedData(miscAccessoryCollection, lang),
    ]
}

function buildSectionParts(lang: Language) {
    return [
        getTranslatedTitle("conversionCollection", lang),
        getTranslatedData(conversionCollection, lang),
        getTranslatedTitle("barrelCollection", lang),
        getTranslatedData(barrelCollection, lang),
    ]
}

function buildSectionLiterature(lang: Language) {
    return [
        getTranslatedTitle("bookCollection", lang),
        getTranslatedData(bookCollection, lang),
    ]
}

export const section_collectionItems_title: Section = {
    title: {
        de: `Unterstützte Sammlungen`,
        en: `Supported Collections`,
        fr: `Collections soutenues`,
    },
    text: {
        de: [
                `Mit Arsenal können viele Sammlungen angelegt werden, über Waffen und Munition, Zubehör wie Optiken, Schalldämpfer und Laser bishin zu Büchern.
                Die Sammlungen werden stetig ausgebaut, in Planung sind zum Beispiel mehr Literatur und die Verwaltung des Wiederlade-Equipments.`
            ],
        en: [
                `With Arsenal, many collections can be created, from weapons and ammunition to accessories such as optics, silencers, and lasers, to books.
                The collections are constantly being expanded, with more literature and the management of reloading equipment being planned, for example.`
            ],
        fr: [
                `De nombreuses collections peuvent être créées avec Arsenal, des armes et munitions, aux accessoires comme les optiques, les silencieux et les lasers, en passant par les livres.
                Les collections sont en constante évolution, avec notamment plus de littérature et la gestion de l’équipement de rechargement en cours de développement.`
            ],
    }
}

export const section_collectionItems_main: Section = {
    title: {
        de: `Hauptsammlungen`,
        en: `Main Collections`,
        fr: `Collections principales`,
    },
    text: {
        de: buildSectionMain("de"),
        en: buildSectionMain("en"),
        fr: buildSectionMain("fr"),
    }
}

export const section_collectionItems_accessories: Section = {
    title: {
        de: `Zubehör`,
        en: `Accessories`,
        fr: `Accessoires`,
    },
    text: {
        de: buildSectionAccessories("de"),
        en: buildSectionAccessories("en"),
        fr: buildSectionAccessories("fr"),
    }
}

export const section_collectionItems_parts: Section = {
    title: {
        de: `Waffenteile`,
        en: `Gun Parts`,
        fr: `Pièces d’arme`,
    },
    text: {
        de: buildSectionParts("de"),
        en: buildSectionParts("en"),
        fr: buildSectionParts("fr"),
    }
}

export const section_collectionItems_literature: Section = {
    title: {
        de: `Literatur`,
        en: `Literature`,
        fr: `Littérature`,
    },
    text: {
        de: buildSectionLiterature("de"),
        en: buildSectionLiterature("en"),
        fr: buildSectionLiterature("fr"),
    }
}

export const section_supportedCalibers: Section = {
    title: {
        de: `Unterstützte Kaliber`,
        en: `Supported Calibers`,
        fr: `Calibres pris en charge`,
    },
    text: {
        de: [
            `Gewisse Funktionalität wie zum Beispiel QuickShot ist abhängig von einem bestimmten Kaliber-Format. Die App stellt selbst sicher, dass dieses Format befolgt wird. 
            Wenn allerdings eigene Daten importiert werden, müssen diese Daten auf das korrekte Format geprüft und gegebenenfalls geändert werden.`,
            `Unten folgt eine Liste der <strong>${getCaliberCount()} Kaliber</strong> und deren Format, die die App erwartet. Sollen mehrere Kaliber angegeben werden (beispielsweise für einen Revolver, 
            der .357 Magnum und .38 Special verschiesst), so sind diese mit einem Komma und Abstand ", " zu trennen:`,
            `<code>.357 S&W Magnum, .38 S&W Special</code>`
        ],
        en: [
            `Some functionality like QuickShot depend on a specific caliber format. In-App there are guardrails in place to ensure a caliber follows this format,
            however when importing your own custom data, you may need to amend your caliber data first.`,
            `Below is a list of the <strong>${getCaliberCount()} calibers</strong> and their exact format the App supports. If you need to specify multiple calibers (for example if a Revolver 
            shoots .357 Magnum and .38 Special), separate them with a comma and space ", ":`,
            `<code>.357 S&W Magnum, .38 S&W Special</code>`
        ],
        fr: [
            `Certaines fonctionnalités comme QuickShot dépendent d’un format de calibre spécifique. Dans l’application, des garde-fous sont en place pour s’assurer que le 
            calibre respecte ce format, mais lorsque vous importez vos propres données personnalisées, vous devrez peut-être modifier vos données de calibre au préalable.`,
            `Vous trouverez ci-dessous une liste des <strong>${getCaliberCount()} calibres</strong> et de leur format exact pris en charge par l’application. Si vous devez spécifier plusieurs calibres
            (par exemple si un revolver tire en .357 Magnum et en .38 Special), séparez-les par une virgule et un espace ", ":`,
            `<code>.357 S&W Magnum, .38 S&W Special</code>`
        ]
    }
}