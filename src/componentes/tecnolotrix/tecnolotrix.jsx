import './tecnolotrix.css'
import { useState } from 'react'
import useCelular from '../../Hooks/useCelular'
import reactIcon from '../../assets/icons/react.png'
import nodeIcon from '../../assets/icons/nodejs.png'
import viteIcon from '../../assets/icons/vite.png'
import mongoIcon from '../../assets/icons/mongodb.svg'

const Tecnolotrix = () => {
    const [seleccionado, setSeleccionado] = useState(null);
    var isMobile = useCelular()

    const tecnologias = [{
        nombre: "React",
        imagen: reactIcon,
        descripcion: "react es importante, el esqueleto de este trabajo"
    },
    {
        nombre: "Node Js",
        imagen: nodeIcon,
        descripcion: "Node aporta los datos alojados en una db de mongo, como las materias y también hay un sistema de actualización de dicha db, no accesible al usuario"
    },
    {
        nombre: "Vite",
        imagen: viteIcon,
        descripcion: "¿Cómo olvidarme de vite?"
    },
    {
        nombre: "Tailwind",
        imagen: mongoIcon,
        descripcion: "Tailwind fue utilizado en apuros para el formulario del portafolio"
    }
    ]

    const obtenerDescripcion = (seleccionado) => {
        const tecnologia = tecnologias.find((tecnologia) => tecnologia.nombre === seleccionado)
        return tecnologia;
    }


    return (
        <article className='tecnologias' id="tecnologias">
            <div className='tecnologias1'>
                {!isMobile ? (<h3><span>Tech</span>nolotrix</h3>) : <h3>Tecnologias</h3>}
                <div className='tecnolotrix'>
                    {!isMobile ? (
                        tecnologias.map((tecnoItem, index) => (
                            <>
                                <img
                                    key={index}
                                    id={tecnoItem.nombre}
                                    className={seleccionado === tecnoItem.nombre ? "iconoTrix seleccionado" : 'iconoTrix'}
                                    src={tecnoItem.imagen}
                                    onClick={() => { setSeleccionado(seleccionado === tecnoItem.nombre ? null : tecnoItem.nombre) }}
                                />
                                {index + 1 === 2 && (
                                    <>
                                        <div className="sqre sqr"></div>
                                        <div className="sqre sqr2"></div>
                                        <div className="circl"></div>
                                    </>
                                )}
                            </>
                        ))
                    ) : (
                        <section className='cards' id="educacion">
                            {tecnologias.map((tecnologia, index) => (
                                <article key={index}>
                                        <div  className='segundiv'>
                                            <div className='divimagen'>
                                                <img src={tecnologia.imagen} alt="Tecnología 1" />
                                            </div>
                                            <h2 className='achedos'>{tecnologia.nombre}</h2>
                                            <p>{tecnologia.descripcion}</p>
                                        </div>
                                    
                                </article>
                            ))}
                        </section>
                    )}

                </div>
                <div className={seleccionado ? "info escribiendo" : "info"}>
                {!isMobile ?  seleccionado ? obtenerDescripcion(seleccionado).descripcion : "Clickee la tecnología"
                : (<p></p>)}
                </div>
            </div>
        </article>
    );
}

export default Tecnolotrix