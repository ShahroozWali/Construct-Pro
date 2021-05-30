import React from 'react'
import './planner.css'

function Planner() {
    return (
        <div className="planner">
            
        <center style={{marginTop:50}}>
            <h1>CONSTRUCTION PLAN GENERATOR</h1>
            <h2>GENERATE AI BASED CONSTRUCTION PLANS FOR YOUR PROJECTS</h2>
        </center> 


        <div className="input-container">
            <input type="text" className="input-planner" placeholder="Enter Your Budget" /><br />
            
            <select className="input">
            <option value="" selected>Select Plot Size</option>
            </select><br />

            <input type="text" className="input-planner" placeholder="Enter Your Budget" /><br />

            <select className="input" >
            <option value="" selected>Plot Location</option>
            </select>

            <button type="submit" className="btn-planner">NEXT</button>
            <br />
        </div>

        </div>
    )
}

export default Planner
