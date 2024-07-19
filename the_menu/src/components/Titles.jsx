import React from 'react'
import description from '../description'


export default function Titles({setSelectedContent}){

    

    return(
        <>
            <ul className='titleContainer'>
                {description.map((item, index)=> (
                    <li className='titleHeadings' key={index} onClick={() => setSelectedContent(item.content)}>{item.title}</li>
                ))}
            </ul>
        </>
    )

    
}