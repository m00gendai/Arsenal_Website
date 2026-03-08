import { useState } from "react"
import type { Language } from "../types/types_global"

interface Props{
    language: Language
    currentLocation: string
}

export default function Navbar({language, currentLocation}:Props){

    const [visible, setVisible] = useState<boolean>(false)

    function hamburgerMenu(){
        setVisible(visible => !visible)
    }

    const target = currentLocation.split("/").length === 3 ? currentLocation.split("/").slice(-1)[0] : ""

    return (
        <>
            <nav className="nav_desktop">
                <div className="nav_desktop_container">
                    <ul className="anchors">
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
                    <ul className="flags">
                        <li>
                            <a href={`/de/${target}`} className="flag" id="flag_de" aria-label="Deutsch"></a>
                        </li>
                        <li>
                            <a href={`/en/${target}`} className="flag" id="flag_en" aria-label="English"></a>
                        </li>
                        <li>
                            <a href={`/fr/${target}`} className="flag" id="flag_fr" aria-label="Francais"></a>
                        </li>
                    </ul>
                </div>
            </nav>
            <nav className="nav_mobile">
                <div id="tagline">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hospital</title><path d="M18 14H14V18H10V14H6V10H10V6H14V10H18" /></svg>
                    Arsenal App
                </div>
                <div id="hamburger" onClick={()=>hamburgerMenu()}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                </div>
                {visible ? <div id="mobileContainer">
                    <ul className="flags_mobile">
                        <li>
                            <a href={`/de/${target}`} className="flag" id="flag_de" aria-label="Deutsch"></a>
                        </li>
                        <li>
                            <a href={`/en/${target}`} className="flag" id="flag_en" aria-label="English"></a>
                        </li>
                        <li>
                            <a href={`/fr/${target}`} className="flag" id="flag_fr" aria-label="Francais"></a>
                        </li>
                    </ul>
                    <ul className="anchors_mobile">
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