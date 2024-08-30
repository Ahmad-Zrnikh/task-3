import "./card.css"

export default function Card({src ,type ,price ,title ,bedrooms ,bathrooms , area , floor ,parking}) {
  return (
    <div className="card">
        <div className="imgCard">
            <img src={src} alt="" />
        </div>

        <div className="price">
            <button>{type}</button>
            <h2>{price}</h2>
        </div>

        <div className="textCard">
            <h2>{title}</h2>
            <div className="contentCard">
                <div className="rooms">
                   <div> <p>Bedrooms: <span className="bold">{bedrooms}</span ></p></div>
                    <div><p>Bathrooms: <span className="bold">{bathrooms}</span ></p></div>
                </div>
                <div className="area">
                <div><p>Area: <span className="bold">{area}</span ></p></div>
                <div><p> Floor: <span className="bold">{floor}</span ></p></div>
                </div>
                <p>Parking: <span className="bold">{parking}</span ></p>
            </div>
        </div>
        <hr />
        <div className="btn"><button className="btnCard">Schedule a visit</button></div>
        

    </div>
  )
}
