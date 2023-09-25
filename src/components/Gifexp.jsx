
import { useFetchGifs } from "../hook/useFetchGifs"
import {  GetItem } from "../components"
import  PropTypes from "prop-types";









export const Gifexp = ({ category }) => {
  
  const {isLoading, imagenes } = useFetchGifs(category)

  


 console.log('desde gifexp para el .map',imagenes,isLoading)
  

  return (
    <>
   

    <h3>{ category }</h3>
    {
      isLoading && ( <h2>cargando</h2> )
    }
    <div className="card-grid">
      
      {
        imagenes.map((valor)=>{
         
        return < GetItem 
         key={valor.id}
         {...valor}
         />
        })
      }
    
    
    
    </div>
    

      
    
    </>

  )
}

Gifexp.propTypes = {
  category : PropTypes.string.isRequired
}
