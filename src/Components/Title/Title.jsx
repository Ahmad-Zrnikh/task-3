import "./Title.css"

export default function Title({nameOfPage}) {
  return (
    <div className="titleSection">
        <img src="/images1/page-heading-bg.jpg" alt="" />
        <div>
        <p >HOME / {nameOfPage}</p>
        <h1>{nameOfPage}</h1></div>
    </div>
  )
}
