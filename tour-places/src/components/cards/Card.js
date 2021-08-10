import React from 'react'
import { data } from '../../helper/data';

const card = (props) => {
    return (
        <div className="container">
            <div className="card" >
                <h2>{props.title}</h2>
                <img src={data[0].image}></img>
                <p>{data[0].desc }</p>
            </div>
        </div>
    )
}

export default card;
