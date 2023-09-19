
import { useState } from "react"
import { AddCategory,Gifexp } from "./components";



export const GifExpertApp = () => {
  const [categories, setCategories] = useState([])
  console.log(categories)

  const onAddCategory = (valorObtenido) => {
   console.log(valorObtenido)
   const valorObtenidoMayuscula = valorObtenido.toUpperCase()
   
  
   //otra opcion sin la necesidad de crear una const arreglo
   //if (categories.includes(valorObtenido)){return}
   
   setCategories((val) => {

    const pasadoArregloMayuscula = val.map(e => e.toUpperCase())

    if (pasadoArregloMayuscula.includes(valorObtenidoMayuscula)) {
      return val
    }
      return [valorObtenido,...val]
   })
  }




  return (
    <>
    {/*titulo*/}
    <h1>GifExpertApp</h1> 

    {/*buscardor*/}
      < AddCategory
       //setCategories={setCategories}
       //la utilizo a la funcion para ir a capturar el valor y trabajarlo en el componente padre
       onNewCategory={(valor) => {onAddCategory(valor)} }
        />

      
      {/*gifContainer*/}

      
        {categories.map((categories)=>

        <Gifexp 
        category={categories} 
        key={categories}/>
       )
       }
      

    {/*gif*/}
    </>
  )
}
