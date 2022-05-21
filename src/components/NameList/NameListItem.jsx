import React from 'react';


function NameListItem(props){
    return(
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-lg-3 col-md- col-sm-4 col-xs-12">
                     <img src={props.avatar} alt={props.avatar}/>
                 </div>
                <div className="col-lg-9 col-md-8 col-sm-8 col-xs-12">
                    <h4>{props.name}</h4>
                    <p>Description : {props.details}</p>
                    <h5>{props.price}</h5>
                </div>
            </div>
        </li>
    )
}

export default NameListItem;