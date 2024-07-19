import React from 'react'

export default function Content({content}){

    return(
        <div className='contentContainer'>
            {content ? <p className='content'>{content}</p>  : <p className='defaultContent'>Click on a Programming Language.</p>}
        </div>
    )
}