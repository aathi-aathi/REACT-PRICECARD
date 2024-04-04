import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const free= {
    type:"FREE",
    price:0,
    abledfeature:{
      value1:{obj: "1 user",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value2:{obj:"50GB Storage",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value3:{obj:"Unlimited Public Projects", style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value4:{obj:"Commmunity Access",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value5:{obj:"Unlimited Private Projects",style:"disabled",img:"https://cdn-icons-png.flaticon.com/128/14073/14073624.png"},
      value6:{obj:"Dedicated Phone Support",style:"disabled",img:"https://cdn-icons-png.flaticon.com/128/14073/14073624.png"},
      value7:{obj:"Free Subdomain",style:"disabled",img:"https://cdn-icons-png.flaticon.com/128/14073/14073624.png"},
      value8:{obj:"Monthly Status reports",style:"disabled",img:"https://cdn-icons-png.flaticon.com/128/14073/14073624.png"},
      style:"disabled"
  },



  }
  const plus={
    type:"PLUS",
    price:9,
    abledfeature:{
      value1:{obj: "5 users",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value2:{obj:"50GB Storage",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value3:{obj:"Unlimited Public Projects", style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value4:{obj:"Commmunity Access",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value5:{obj:"Unlimited Private Projects",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value6:{obj:"Dedicated Phone Support",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value7:{obj:"Free Subdomain",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value8:{obj:"Monthly Status reports",style:"disabled",img:"https://cdn-icons-png.flaticon.com/128/14073/14073624.png"},
      style:"disabled"

  }
  }
  const pro={
    type:"PRO",
    price:49,
    abledfeature:{
      value1:{obj: "unlimited users",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value2:{obj:"50GB Storage",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value3:{obj:"Unlimited Public Projects", style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value4:{obj:"Commmunity Access",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value5:{obj:"Unlimited Private Projects",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value6:{obj:"Dedicated Phone Support",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value7:{obj:"Free Subdomain",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"},
      value8:{obj:"Monthly Status reports",style:"abled",img:"https://cdn-icons-png.flaticon.com/128/1828/1828743.png"}
    }
      
      }
   
 return <>
 
<ProCard model={free}/>
<ProCard model={plus}/>
<ProCard model={pro}/>
 </>
 
}

export default App

function ProCard({model}){
  return (
    <div className="card">
      <p className="type">{model.type}</p>
      <h1>${model.price}/month</h1>
      <div className="line"></div>
      <div className="features">
        <div className="feature"> <img src={model.abledfeature.value1.img}></img><p className={model.abledfeature.value1.style}>{model.abledfeature.value1.obj}</p></div>
        <div className="feature"><img src={model.abledfeature.value2.img}></img><p className={model.abledfeature.value2.style}>{model.abledfeature.value2.obj}</p></div>
        <div className="feature"><img src={model.abledfeature.value3.img}></img><p className={model.abledfeature.value3.style}>{model.abledfeature.value3.obj}</p></div>
        <div className="feature"><img src={model.abledfeature.value4.img}></img><p className={model.abledfeature.value4.style}>{model.abledfeature.value4.obj}</p></div>
        <div className="feature"><img src={model.abledfeature.value5.img} className={model.abledfeature.value5.style}></img> <p className={model.abledfeature.value5.style}>{model.abledfeature.value5.obj}</p></div>
        <div className="feature"><img src={model.abledfeature.value6.img} className={model.abledfeature.value6.style}></img><p className={model.abledfeature.value6.style}>{model.abledfeature.value6.obj}</p></div>
        <div className="feature"><img src={model.abledfeature.value7.img} className={model.abledfeature.value7.style}></img> <p className={model.abledfeature.value7.style}>{model.abledfeature.value7.obj}</p></div>
        <div className="feature"><img src={model.abledfeature.value8.img} className={model.abledfeature.value8.style}></img> <p className={model.abledfeature.value8.style}>{model.abledfeature.value8.obj}</p></div>
    </div>
      <button  className={model.abledfeature.style}>Buy</button>
    </div>
  )
}





   
