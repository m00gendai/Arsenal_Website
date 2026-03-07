import type { SimpleTranslation } from "../types/types_global";

interface Section_text{
    de: string[]
    en: string[]
    fr: string[]
}

interface Section{
    title: SimpleTranslation
    text: Section_text
}


export const title: SimpleTranslation ={
    de: "Details",
    en: "Details",
    fr: "Détails",
}

export const sections: Section = {
    title: {
        de: `Unterstützte Kaliber`,
        en: `Supported Calibers`,
        fr: `Calibres pris en charge`,
    },
    text: {
        de: [
            `Gewisse Funktionalität wie zum Beispiel QuickShot ist abhängig von einem bestimmten Kaliber-Format. Die App stellt selbst sicher, dass dieses Format befolgt wird. 
            Wenn allerdings eigene Daten importiert werden, müssen diese Daten auf das korrekte Format geprüft und gegebenenfalls geändert werden.`,
            `Unten folgt eine Liste der Kaliber und deren Format, die die App erwartet. Sollen mehrere Kaliber angegeben werden (beispielsweise für einen Revolver, 
            der .357 Magnum und .38 Special verschiesst), so sind diese mit einem Komma und Abstand ", " zu trennen:`,
            `<code>.357 S&W Magnum, .38 S&W Special</code>`
        ],
        en: [
            `Some functionality like QuickShot depend on a specific caliber format. In-App there are guardrails in place to ensure a caliber follows this format,
            however when importing your own custom data, you may need to amend your caliber data first.`,
            `Below is a list of calibers and their exact format the App supports. If you need to specify multiple calibers (for example if a Revolver 
            shoots .357 Magnum and .38 Special), separate them with a comma and space ", ":`,
            `<code>.357 S&W Magnum, .38 S&W Special</code>`
        ],
        fr: [
            `Certaines fonctionnalités comme QuickShot dépendent d’un format de calibre spécifique. Dans l’application, des garde-fous sont en place pour s’assurer que le 
            calibre respecte ce format, mais lorsque vous importez vos propres données personnalisées, vous devrez peut-être modifier vos données de calibre au préalable.`,
            `Vous trouverez ci-dessous une liste des calibres et de leur format exact pris en charge par l’application. Si vous devez spécifier plusieurs calibres
            (par exemple si un revolver tire en .357 Magnum et en .38 Special), séparez-les par une virgule et un espace ", ":`,
            `<code>.357 S&W Magnum, .38 S&W Special</code>`
        ]
    }
}