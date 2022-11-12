import React from 'react';
import './card.styles.css';


export const Card= props =>(
    <div className='card-container'>
        <img src={"https://robohash.org/concat.{props.monsters.id}?set=set2&size=150x150"}/>
        <h2>{props.monsters.name}</h2>
        <p>{props.monsters.email}</p>
    </div>
); 