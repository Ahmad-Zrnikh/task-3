import "./Rectangular.css"

export default function Rectangular({number ,name1 , name2}) {
  return (
    <div className="rectangular">
<div className="number">
    <p>{number}</p>
</div>
<div className="text-rectangular">
    <p>{name1}</p>
    <p>{name2}</p>
</div>
    </div>
  )
}
