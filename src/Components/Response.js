import React from "react";

export default function Response({from, message, time}) {
    
    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
               {message}
            </div>
        </li>
   ) 
}

Response.defaultProps = {
    message: "...печатает"
}