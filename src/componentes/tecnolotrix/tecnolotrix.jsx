import './tecnolotrix.css'
import { useState } from 'react'
import reactIcon from '../../assets/icons/react.png'
import nodeIcon from '../../assets/icons/nodejs.png'
import viteIcon from '../../assets/icons/vite.png'
import tailwindIcon from '../../assets/icons/tailwind.png'

const Tecnolotrix = () => {
    const [centro, setCentro]=useState(false)

    function centrar(id) {
        console.log(id);
        let clickeado = document.getElementById(id);
        if (clickeado) {
            if (clickeado.classList.contains('seleccionado')) {
                clickeado.classList.remove('seleccionado');
                setCentro(false);
            }
            else if (!clickeado.classList.contains('seleccionado') && !centro) {
                clickeado.classList.add("seleccionado");
                setCentro(true);
            }
        }
    }


    return (
        <article className='tecnologias' id="tecnologias">
            <h3><span>Tech</span>nolotrix</h3>
            <div className='tecnolotrix '>
                <img id="i1" className='iconoTrix ' src={reactIcon} onClick={() => { centrar("i1") }} />
                <img id="i2" className='iconoTrix ' onClick={() => { centrar("i2") }} src={nodeIcon} />
                <div className="sqre sqr"></div>
                <div className="sqre sqr2"></div>
                <div className="circl "></div>
                <img id="i3" className='iconoTrix' onClick={() => { centrar("i3") }} src={viteIcon} />
                <img id="i4" className='iconoTrix' onClick={() => { centrar("i4") }} src={tailwindIcon} />
            </div>
        </article>)
}

export default Tecnolotrix