
import { useFetchGifs } from "../hook/useFetchGifs"
import { Estado, GetItem } from "../components"









export const Gifexp = ({ category }) => {
  const {isLoading, imagenes } = useFetchGifs(category)



 console.log('desde gifexp para el .map',imagenes,isLoading)
  

  return (
    <>
   
    <Estado status={isLoading}/>
    <h3>{ category }</h3>
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
