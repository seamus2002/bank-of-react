import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="card-header">
                {props.description}
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.date}</li>
                <li className="list-group-item">${props.amount}</li>
            </ul>
        </div>
    );
}

export default Card;
