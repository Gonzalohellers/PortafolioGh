import { useState, useEffect } from 'react';

function useCelular(){
    const [isMobile, setIsMobile] = useState(false);

   
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000); // Actualizar el estado según el ancho de la ventana
        };

        handleResize(); // Llamar a la función para inicializar el estado al montar el componente

        window.addEventListener('resize', handleResize); // Agregar un event listener para manejar cambios en el tamaño de la ventana

        return () => {
            window.removeEventListener('resize', handleResize); // Remover el event listener al desmontar el componente
        };
    }, []);

    return isMobile;
}
export default useCelular