export type Language = "de" | "en" | "fr"

export interface SimpleTranslation{
    de: string
    en: string
    fr: string
}

export interface SimpleTranslation_StringArray{
    de: (string | string[])[]
    en: (string | string[])[]
    fr: (string | string[])[]
}