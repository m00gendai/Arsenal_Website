import type { SimpleTranslation, SimpleTranslation_StringArray } from "../types/types_global"

interface Section_text{
    de: string[]
    en: string[]
    fr: string[]
}

interface Section{
    title: SimpleTranslation
    text: Section_text
}

export interface FAQ{
    question: SimpleTranslation
    answer: SimpleTranslation_StringArray
}

export const title: SimpleTranslation ={
    de: "FAQ",
    en: "FAQ",
    fr: "FAQ",
}

export const faq: FAQ[] = [
    {
        question: {
            de: `Wo werden die Daten gespeichert und wer hat Zugriff?`,
            en: `Where is the data saved and who has access to it?`,
            fr: `Où sont sauvegardées les données et qui y a accès?`,
        },
        answer: {
            de: [
                    `Die App ist zu 100% offline und ist weder von Servern abhängig, noch werden irgendwelche Abfragen via Internet gemacht. 
                    Die Datenbanken sind auf dem Gerät selbst gespeichert und können bei Bedarf in diversen Formaten exportiert werden.`
                ],
            en: [
                    `The app is 100% offline and is not dependent on any servers, nor is there any internet connectivity. 
                    The database is saved locally on-device and can be exported in various formats if desired.`
                ],
            fr: [
                    `L’application est 100% hors ligne et n’est pas dépendante de serveurs, ni de connexion internet. 
                    La base de données est sauvegardée localement sur l’appareil et peut être exportée dans différents formats si désiré.`
                ],
        },
    },
    {
        question: {
            de: `Ich habe bereits eine Liste meiner Waffen in Excel, kann ich diese importieren?`,
            en: `I already have an Excel list of my guns, can I import them?`,
            fr: `J’ai déjà une liste de mes armes dans Excel, puis-je les importer?`,
        },
        answer: {
            de: [
                    `Ja, eigene Excel-Dateien (im CSV-Format) können importiert werden. Welches Feld dabei wie gehandhabt wird, kann direkt im App gehandhabt werden.`,
                    `Zu beachten ist, dass die Kaliber exakt so wie in der App vorgesehen benannt werden müssen, ansonsten funktioniert die “QuickShot”-Funktion nicht. 
                    Eine Liste der Kaliber findet sich <a href="#details">hier</a>. Mehrere Kaliber sind mit einem Komma gefolgt von einem Abstand ", " zu trennen.`,
                    `Ebenfalls zu beachten ist, dass ein Import als CSV Datei keine Bilder unterstützt, diese müssen in der App hinzugefügt werden.`
                ],
            en: [
                    `Yes, your own Excel files (in CSV format) can be imported. The handling of the fields can be configured directly in the app.`,
                    `Please note that the calibers must be named exactly as specified in the app, otherwise the "QuickShot" function will not work. 
                    A list of calibers can be found here. Multiple calibers are separated by a comma followed by a space ", ".`,
                    `Please also note that importing as a CSV file does not support images, these must be added in the app.`
                ],
            fr: [
                    `Oui, vos propres fichiers Excel (au format CSV) peuvent être importés. La gestion des champs peut être configurée directement dans l’application.`,
                    `Veuillez noter que les calibres doivent être nommés exactement comme indiqué dans l’application, sinon la fonction «QuickShot» ne fonctionnera pas. 
                    Une liste des calibres est disponible ici. Les calibres multiples sont séparés par une virgule suivie d’un espace ", ".`,
                    `Veuillez également noter que l’importation au format CSV ne prend pas en charge les images, celles-ci doivent être ajoutées dans l’application.`
                ],
        }
    },
    {
        question: {
            de: `Ich nutze bereits App XY, warum sollte ich auf Arsenal umsteigen?`,
            en: `I already use the XY app, why should I switch to Arsenal?`,
            fr: `J’utilise déjà l’application XY, pourquoi devrais-je passer à Arsenal?`,
        },
        answer: {
            de: [
                    `Es gibt in der Tat vor allem auf Android diverse alternative Apps, die das gleiche Bedürfnis wie Arsenal bedienen. Jedoch`,
                    [
                        `sind die meisten auf die USA ausgerichtet`,
                        `scheinen sie keine Sprachauswahl zu haben, oder es wurde alles automatisch übersetzt`,
                        `scheinen sie nicht den gleichen Funktionsumfang zu haben, oder wenn, dann recht unintuitiv und umständlich`,
                        `kann der Entwickler oft nicht greifbar erscheinen (zwischengeschaltete Firma) und scheinen teilweise nicht mit der Community zu interagieren`,
                        `können sie das Doppelte kosten und teils intransparente In-App-Käufe oder Werbung aufweisen`,
                        `scheinen sich einige Apps nicht in aktiver Entwicklung zu befinden`,
                    ],
                    `Dem gegenüber steht Arsenal:`,
                    [
                        `in erster Linie auf Schweizer Bedürfnisse zugeschnitten, aber auch weltweit einsetzbar und bietet beispielsweise die freie Wahl bei angezeigten Masseinheiten`,
                        `in fünf Sprachen verfügbar, mit Übersetzungen in Deutsch und Englisch von Hand. Für Französisch, Italienisch und Rumantsch Grischun wurde ein Schweizer Übersetzungsservice genutzt.`,
                        `kommt modern, einfach (soweit wie möglich) und funktional daher`,
                        `hat einen privaten Schweizer Entwickler, der aktiv in der Schweizer Waffen- und Schützenszene bekannt ist und mit der Community interagiert`,
                        `kostet einmalig 5 CHF lebenslang, inklusive aller zukünftigen Updates. Keine Werbung, kein Abo, keine In-App-Käufe`,
                        `ist in steter Entwicklung`,
                    ],
                    `Schlussendlich entscheidet jeder selbst, welche App, wenn überhaupt, am besten passt. Manchmal reicht die Excel-Tabelle absolut aus.`
            ],
            en: [
                    `There are indeed several alternative apps, especially on Android, that serve the same purpose as Arsenal. However`,
                    [
                        `most are US-oriented`,
                        `they seem to have no language selection or employ an auto-translation`,
                        `they do not seem to have the same range of functions, or if they do, they seem quite unintuitive and cumbersome`,
                        `the developer can often appear as not traceable (LLC in front of the developer) and sometimes appear to not interact with the community`,
                        `they can cost twice as much, may have partly non-transparent in-app purchases or advertising or can offer subscription based payment models`,
                        `some seem to not be in active development`,
                    ],
                    `Arsenal, on the other hand,`,
                    [
                        `is primarily tailored to Swiss needs, but also usable worldwide and offers a choice in displayed units of measurement, for example`,
                        `is available in five languages, with translations into German and English made by hand, and French, Italian and Rumantsch Grischun by using a Swiss Translation Service`,
                        `has a modern, simple (as much as possible) and functional user interface`,
                        `has a private Swiss developer who is actively known in the Swiss weapons and shooting community and interacts with that community`,
                        `costs a one-time fee of 5 CHF for life, including all future updates. No ads, no subscriptions, no in-app purchases.`,
                        `is in constant development`,
                    ],
                    `Ultimately, everyone decides for themselves which app, if any, is best suited. Sometimes that Excel-Sheet is sufficient.`,
                ],
            fr: [
                    `Il existe en effet plusieurs applications alternatives, en particulier sur Android, qui remplissent le même rôle qu’Arsenal. Cependant`,
                    [
                        `la plupart sont orientées vers les États-Unis`,
                        `elles semblent ne pas proposer de choix de langue ou utiliser une traduction automatique`,
                        `elles ne semblent pas offrir la même gamme de fonctions, ou si elles le font, elles semblent assez peu intuitives et compliquées à utiliser`,
                        `le développeur peut souvent sembler introuvable (LLC devant le nom du développeur) et parfois ne pas interagir avec la communauté`,
                        `elles peuvent coûter deux fois plus cher, avoir des achats in-app ou de la publicité partiellement opaques ou proposer des modèles de paiement basés sur des abonnements`,
                        `certaines semblent ne pas être en développement actif`,
],
                    `Arsenal, en revanche`,
                    [
                        `est principalement conçu pour répondre aux besoins suisses, mais peut être utilisé dans le monde entier et propose un choix d’unités de mesure, par exemple`,
                        `est disponible en cinq langues, avec des traductions en allemand et en anglais réalisées à la main, et en français, italien et romanche grison par l’intermédiaire d’un service de traduction suisse`,
                        `a une interface utilisateur moderne, simple (autant que possible) et fonctionnelle`,
                        `a un développeur suisse privé qui est connu dans la communauté suisse des armes et du tir et qui interagit avec cette communauté`,
                        `coûte un forfait unique de 5 CHF à vie, y compris toutes les mises à jour futures. Pas de publicité, pas d’abonnement, pas d’achats in-app.`,
                        `est en développement constant`,
                    ],
                    `En fin de compte, chacun décide pour lui-même quelle application, s’il y en a une, est la plus adaptée. Parfois, ce tableau Excel suffit.`
                ],
        }
    },
    {
        question: {
            de: `Kann ich den aktuellen Entwicklungsstatus der App einsehen?`,
            en: `Can I check the current development status of the App?`,
            fr: `Puis-je consulter l’état actuel du développement de l’application?`,
        },
        answer: {
            de: [
                    `Ja, auf <a href="https://trello.com/b/aewI0VKW/arsenal" target="_blank">Trello (nur Englisch)</a> ist der momentane Stand ersichtlich, 
                    inklusive geplanter und gewünschter Funktionen.`
                ],
            en: [
                    `Yes, the current development status, including planned and requested features, is published on 
                    <a href="https://trello.com/b/aewI0VKW/arsenal" target="_blank">Trello</a>.`
                ],
            fr: [
                    `Oui, l’état actuel du développement, y compris les fonctionnalités prévues et demandées, est publié sur 
                    <a href="https://trello.com/b/aewI0VKW/arsenal" target="_blank">Trello</a>.`
                ],
        }
    },
    {
        question: {
            de: `Wo kann ich Rückmeldungen, Kritik und Wünsche anbringen?`,
            en: `Where can I voice my feedback, critique and wishes?`,
            fr: `Où puis-je exprimer mes remarques, critiques et souhaits?`,
        },
        answer: {
            de: [
                    [
                        `<a href="https://waffenforum.ch/forum/index.php?thread/2883-arsenal-die-schweizer-app-f%C3%BCr-waffensammler/&pageNo=1" target="_blank">
                        Offizieller Thread im waffenforum.ch</a>`,
                        `Per Email an <a href="mailto:info@mrweber.ch">info@mrweber.ch</a>`,
                        `Auf Reddit unter <a href="https://www.reddit.com/user/schussfreude/" target="_blank">u/schussfreude</a>`,
                        `Auf X (vormals Twitter) unter <a href="https://x.com/Arsenal_App_CH" target="_blank">Arsenal_App_CH</a>`,
                    ]
                ],
            en: [
                    [
                        `<a href="https://waffenforum.ch/forum/index.php?thread/2883-arsenal-die-schweizer-app-f%C3%BCr-waffensammler/&pageNo=1" target="_blank">
                        Official Thread on waffenforum.ch</a>`,
                        `Via Email to <a href="mailto:info@mrweber.ch">info@mrweber.ch</a>`,
                        `On Reddit to <a href="https://www.reddit.com/user/schussfreude/" target="_blank">u/schussfreude</a>`,
                        `On X (formerly Twitter) to <a href="https://x.com/Arsenal_App_CH" target="_blank">Arsenal_App_CH</a>`,
                    ]
                ],
            fr: [
                    [
                        `<a href="https://waffenforum.ch/forum/index.php?thread/2883-arsenal-die-schweizer-app-f%C3%BCr-waffensammler/&pageNo=1" target="_blank">
                        Sujet officiel sur waffenforum.ch</a>`,
                        `Par e-mail à <a href="mailto:info@mrweber.ch">info@mrweber.ch</a>`,
                        `Sur Reddit à <a href="https://www.reddit.com/user/schussfreude/" target="_blank">u/schussfreude</a>`,
                        `Sur X (anciennement Twitter) à <a href="https://x.com/Arsenal_App_CH" target="_blank">Arsenal_App_CH</a>`,
                    ],
                ],
        }
    },
]