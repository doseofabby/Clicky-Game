import React from 'react'


 export default function Card (props) {
    return (
        <div>
            <img src= {props.image} onClick={props.shuffle} style = {{height: 350, width: 350,marginBottom: 10, marginTop: 10}}></img>
        </div>
    )
} 