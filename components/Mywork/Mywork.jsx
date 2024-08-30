import React from 'react'
import './Mywork.css'
import { mywork_Data } from '../../assets/mywork_data'
import arrow1 from '../../assets/arrow1.png'

function Mywork() {
  return (
    <div id='work' className='mywork'>
       <div className="mywork-title">
        <h1>My latest Work</h1>
        <span>KuoL</span>
       </div>
       <div className="mywork-container">
         {mywork_Data.map((work,index) => {
           return <img key={index} src={work.w_img} alt="" />
         })}
       </div>
       <div className="mywork-showmore">
        <h1>Show More</h1>
        <img src={arrow1} alt="" />
       </div>
    </div>
  )
}

export default Mywork
