import React, { useState } from 'react'
//cada componente puede tener su propio estado
export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = (e) => {
      
      setInputValue(e.target.value)
      
    } 
    
    const capturandoValor = (e) => {
     e.preventDefault();
     
     if (inputValue.trim().length <= 1) {
      return
     }
  

     //console.log(inputValue)
     //setCategories((algos)=> {
     // console.log('este',algos)
      // return [...algos,inputValue]
     //})

     onNewCategory(inputValue.trim())
     setInputValue('')
     
    }

   

    return (
      <form onSubmit={(e) => capturandoValor(e)} >
        <input 
          type="text"
          placeholder='Buscar imagenes'
          value={inputValue}
          //se puede mandar asi ya que sse recive el evento y se envia el evento
          //onChange={ (e) => { onInputChange}}
          //onchange cambia el inputValue
          onChange={ (e) => { onInputChange(e)}}
          />
       </form>
  )
}
