export type Language = "de" | "en" | "fr"

export interface SimpleTranslation{
    de: string
    en: string
    fr: string
    it?: string
    ch?: string
}

export interface SimpleTranslation_StringArray{
    de: (string | string[])[]
    en: (string | string[])[]
    fr: (string | string[])[]
    it?: (string | string[])[]
    ch?: (string | string[])[]
}