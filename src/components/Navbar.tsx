import { useEffect, useState } from "react"
import type { Language } from "../types/types_global"
import s from "../styles/navbar.module.css"

interface Props{
    language: Language
}

export default function Navbar({language}:Props){

    const [visible, setVisible] = useState<boolean>(false)

    function hamburgerMenu(){
        setVisible(visible => !visible)
    }
    const [target, setTarget] = useState<string>("")

    useEffect(() => {
        const path = window.location.pathname
        setTarget(path.replace(/^\/(de|en|fr)\/?/, ""))
    }, [])

    return (
        <>
            <nav className={`${s.nav_desktop} desktop`}>
                <div className={s.nav_desktop_container}>
                    <ul className={s.anchors}>
                        <li>
                            <a href={`/${language}`}>Home</a>
                        </li>
                        <li>
                            <a href={`/${language}/details`}>Details</a>
                        </li>
                        <li>
                            <a href={`/${language}/faq`}>FAQ</a>
                        </li>
                    </ul>
                    <ul className={s.flags}>
                        <li>
                            <a href={`/de/${target}`} className={s.flag} id={s.flag_de} aria-label="Deutsch"></a>
                        </li>
                        <li>
                            <a href={`/en/${target}`} className={s.flag} id={s.flag_en} aria-label="English"></a>
                        </li>
                        <li>
                            <a href={`/fr/${target}`} className={s.flag} id={s.flag_fr} aria-label="Francais"></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className={`${s.nav_mobile} mobile`}>
                <div id={s.tagline}>
                    Arsenal App
                </div>
                <div id={s.hamburger} onClick={()=>hamburgerMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                </div>
                {visible ? <div id={s.mobileContainer}>
                    <ul className={s.flags_mobile}>
                        <li>
                            <a href={`/de/${target}`} className={s.flag} id={s.flag_de} aria-label="Deutsch"></a>
                        </li>
                        <li>
                            <a href={`/en/${target}`} className={s.flag} id={s.flag_en} aria-label="English"></a>
                        </li>
                        <li>
                            <a href={`/fr/${target}`} className={s.flag} id={s.flag_fr} aria-label="Francais"></a>
                        </li>
                    </ul>
                    <ul className={s.anchors_mobile}>
                        <li>
                            <a href={`/${language}`}>Home</a>
                        </li>
                        <li>
                            <a href={`/${language}/details`}>Details</a>
                        </li>
                        <li>
                            <a href={`/${language}/faq`}>FAQ</a>
                        </li>
                    </ul>
                </div> : null}
            </nav>
        </>
    )
}