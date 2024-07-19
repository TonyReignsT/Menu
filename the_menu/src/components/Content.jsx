import React from 'react'

export default function Content({content}){

    return(
        <div className='contentContainer'>
            {content ? <p className='content'>{content}</p>  : <p className='defaultContent'>Select your favorite ProgrammingLanguage.</p>}
        </div>
    )
}