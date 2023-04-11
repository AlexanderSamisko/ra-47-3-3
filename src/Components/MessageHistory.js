import React from "react";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";
export default function MessageHistory({ list }) {
    

    return  <>
    {list.length && 
        <ul>
            {list.map((item) => { 
                switch(item.type) {
                    case "response": return <Response key={item.id} from={item.from} message={item.text} time={item.time} />
                    case "typing": return <Typing key={item.id} from={item.from} message={item.text} time={item.time} />
                    default: return <Message key={item.id} from={item.from} message={item.text} time={item.time}/>
                }
            })}
        </ul>
    }
   </>
}

MessageHistory.defaultProps = {
    list: []
}