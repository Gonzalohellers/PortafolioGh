import {useFormik} from 'formik'
import "./contacto.css"

const ContactForm= ()  =>{

        const validate = (values) => {
            const errors = {};
    
            if (!values.email) {
                errors.email = 'Campo obligatorio';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Dirección de correo electrónico inválida';
            }
            console.log(errors);
            return errors;
        };

        const formik = useFormik({
            initialValues: {
                nombre: '',
                email: '',
                password: '',
                motivo: ''
            },
            validate, // Asignamos la función de validación al prop validate de useFormik
    
            onSubmit: (values) => {
              
                alert(JSON.stringify(values));// Realiza tu lógica de envío aquí
            }
        });
      
    return(
        <form onSubmit={formik.handleSubmit} id="contacto">
             <label>Ingrese su nombre:</label>
             <input type='text' name="nombre" placeholder='nombre' onChange={formik.handleChange} value={formik.values.nombre}/>
            <label>Ingrese su email:</label>
            <input type='text' name="email" placeholder='email' onChange={formik.handleChange} value={formik.values.email}/>
            <p className='errorEmail'>{formik.errors.email ? formik.errors.email : ""}</p>
            <label>Ingrese su contraseña:</label>
            <input type="password" onChange={formik.handleChange}  value={formik.values.password} name='password' placeholder='Contraseña' />
            <label>Ingrese su motivo de contacto:</label>
            <input type='text' name="motivo" placeholder='motivo' onChange={formik.handleChange} value={formik.values.motivo}/>
            <button type='submit'>Submit</button>
          
        </form>
    )
}

export default ContactForm