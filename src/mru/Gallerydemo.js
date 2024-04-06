import React,{useState} from 'react'
import a from "./Product"
const Gallery = () => {
    const[demo,setDemo]=useState(a)
  return (
    <>
    {
       demo.map((ele)=>{
        const {image,name}=ele
        return <div class="card" >
<img src={image} height="500px" width="500px"class="card-img-top" alt={name}/>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className="card-text">a pic taken from Product.js</p>
  </div>
</div>
       })
    }</>
)
}
export default Gallery