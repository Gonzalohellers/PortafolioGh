import Logo from './logo'
import './nav.css'

import { useState } from 'react'
import useScroll from '../../Hooks/Scroll.js'

function Nav() {
    const [extend, setExtend] = useState(false)
    const background = useScroll();



    return (
        <>
            <nav className={background == true || extend == true ? "navbar blck" : "navbar"}>
                <div className="rowPhone">
                    <Logo />
                    <div>
                        <div id="nav-icon2" className={extend == true ? "open" : ""} onClick={() => setExtend(!extend)}  >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                </div>
                <div className={extend == true ? "links" : "links oculto"}>
                    <a href="/" onClick={()=>setExtend(false)}>Inicio</a>
                    <a href="#educacion" onClick={()=>setExtend(false)}>Educacion</a>
                    <a href="#tecnologias" onClick={()=>setExtend(false)}>Tecnologias</a>
                    <a href="#contacto" onClick={()=>setExtend(false)}>Contacto</a>
                </div>

            </nav>

        </>
    )

}

export default Nav