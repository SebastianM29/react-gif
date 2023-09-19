

export const Estado = ({status}) => {
    console.log('este es el status',status)
    let mensaje
    if (status) {
      mensaje = 'cargando'        
    }
  return (
    <div>{mensaje}</div>
  )
}
