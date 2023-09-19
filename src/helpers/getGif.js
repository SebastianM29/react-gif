
export const searchingDatos= async(category) => {
    const obteniendoDatos = `https://api.giphy.com/v1/gifs/search?api_key=OkEURuJiDErvANhaMtr975DHLzyy4TPU&q=${category}&limit=5`
    const resp = await fetch(obteniendoDatos)
    
    const {data} = await resp.json()
    const gif = data.map((data)=>{
      return{
        id:data.id,
        title:data.title,
        image:data.images.downsized_medium.url
        
      }
    })
    
    
    return gif
  
  }