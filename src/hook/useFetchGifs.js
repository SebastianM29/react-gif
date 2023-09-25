import { useEffect, useState } from "react"
import { searchingDatos } from "../helpers/getGif"


export const  useFetchGifs = (category) => {
    const [imagenes,setImagenes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    const devolviendoFuncion = async( ) => {
     
     const newImagen = await searchingDatos(category);
     setImagenes(newImagen)
     setIsLoading(false)
     console.log('desde el useFetchGifs',isLoading)
  
   }
   //useffect no puede ser async
   useEffect(()=>{
     devolviendoFuncion()
   },[])
  return {
    imagenes:imagenes,
    isLoading
  }
}
