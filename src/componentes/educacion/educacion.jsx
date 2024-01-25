import "./educacion.css"
import materiaService from "../../services/axios"
import { useEffect, useState } from "react";



function Educacion() {
    const [materia, setMateria]=useState([]);
    useEffect(()=>{
        materiaService.getAll()
        .then((response)=>{
          console.log(response.data)
          setMateria(response.data);
        })
      },[])

   

    return (
        <section className='cards' id="educacion">
            {materia.map((educacionItem, index) => (
                <article key={index}>
                    <div>
                    <img
                        alt={educacionItem.title}
                        src={educacionItem.image}
                    />
                    <h3 className="text-md">{educacionItem.titulo}</h3>
                    <p>{educacionItem.description}</p>
                    </div>
                 </article>
            ))
            }


        </section >
    );
}
export default Educacion