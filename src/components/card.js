import React from 'react';
import'../App.css';
import Button from './button'

const Card = (pros) => {
    return (
        <div className="card col-sm-4 mx-2 my-2">
          <div className="card-body">
            <h5 className="card-title"{props.description}></h5>
            <p className="card-text">{props.example}</p>
            {props.tags.map((tag,index) => {
                return <Button
                key={idx}
                tag={tag}/>
            })}
          </div>
        </div>
    )
}

export default Card;