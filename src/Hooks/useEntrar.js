
const tecnologias=[{
    nombre:"React",
    imagen:reactIcon,
    descripcion: "react es importante, el esqueleto de este trabajo"
},
{
    nombre:"Node Js",
    imagen:nodeIcon,
    descripcion:"Node aporta los datos alojados en una db de mongo, como las materias y también hay un sistema de actualización de dicha db, no accesible al usuario"
},
{
nombre:"Vite",
imagen:viteIcon,
descripcion:"¿Cómo olvidarme de vite?"
},
{
nombre:"Tailwind",
imagen:mongoIcon,
descripcion:"Tailwind fue utilizado en apuros para el formulario del portafolio"
}
]

function isCentro(){
    
const [centro, setCentro]=useState(false)
const [idHtml, setIdHtml]=useState(null)
}
    function entrar(id){
        let clickeado = document.getElementById(id);
        if (clickeado) {
            if (clickeado.classList.contains('seleccionado')) {
                clickeado.classList.remove('seleccionado');
                setIdHtml(null)
                setCentro(false);
            }
            else if (!clickeado.classList.contains('seleccionado') && !centro) {
                clickeado.classList.add("seleccionado");
                var select= tecnologias.find(tecnologia => tecnologia.nombre ===id);
                console.log(select)
                setIdHtml(select.descripcion) 
                setCentro(true);
            }
        }
        else{
            console.log("no existe dicha id" . id);
        }
    }

    