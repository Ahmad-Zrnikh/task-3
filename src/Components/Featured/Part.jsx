import "./Part.css"
export default function Part({src , name , des , nameImage}) {
  return (
    <div className="part">
        <div className="image-part">
       <img src={src} alt="" />
           <p>{nameImage}</p>
        </div>
        
        <div className="text-part">
            <h3>{name}</h3>
            <p>{des}</p>
        </div>
    </div>
  )
}
