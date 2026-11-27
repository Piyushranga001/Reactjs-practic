import React from 'react'

const Card = (props) => {

    
  return (
    <div className="div">
              <div className="h-40 w-44">
                <img className="h-full object-cover" src={props.e.download_url} alt="" />
              </div>
              <h1>{props.e.author}</h1>
    </div>
  )
}

export default Card