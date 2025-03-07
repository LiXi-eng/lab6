import React from 'react';

function AboutFun(props) {

    return(
        <div> 
            
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}



export default AboutFun;