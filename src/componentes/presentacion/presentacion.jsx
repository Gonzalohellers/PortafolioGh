import './presentacion.css'
import Background from './background'
import { IoIosArrowDown } from "react-icons/io";


function Presentacion() {
    return (
        <>
            <section className="Presentacion">
                <Background />
                <div className='informacion'>
                    <div className='imagenP'>
                        <div className="muchoTexto">
                            <h1>Desarrollador de REACT</h1>
                            <p className="pPresentacion">¡Hola! Soy Gonzalo, apasionado estudiante de desarrollo de aplicaciones con un enfoque especial en 
                                tecnologías como React, SQL, Java y Python.
                               
                                 Mi fascinación por la creación de soluciones tecnológicas 
                                impulsadas por el código me ha llevado a explorar y aprender constantemente. 
                                </p><p className="pPresentacion">En mi viaje educativo, 
                                estoy emocionado por desafíos que me permitan aplicar mis conocimientos y contribuir al mundo de la 
                                programación.</p> <p className="pPresentacion">¡Acompáñame en mi viaje mientras exploramos el fascinante mundo del desarrollo de aplicaciones 
                                juntos!
                                </p>
                        </div>
                        <div className='img'>
                            <img className="imagen" src='./src/assets/images/yo-edit.jpg'></img>
                        </div>
                    </div>
                    
                </div>
                <IoIosArrowDown className='arrow arrow1' />
            <IoIosArrowDown className='arrow arrow2' />
            <IoIosArrowDown className='arrow arrow3' />
            </section> 
         
           
        </>
    )
}

export default Presentacion