import React from 'react'

function Charlist(props) {
  return (
    <div>
       <div className="container">
          <div class="card m-2" style={{"width": "18rem"}}>
            <img src={props.imageurl} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{props.title} ({props.gender})</h5>
              <p class="card-text">
             Status : {props.status}
              </p>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default Charlist
