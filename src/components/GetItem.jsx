

export const GetItem = ({title,image,id}) => {
  return (
    <div className="card">
        <img src={image} alt={title} />
        <p>{title}</p>
      
    </div>

  )
}
