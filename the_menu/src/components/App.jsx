import React, {useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Titles from './Titles'
import Content from './Content'

export default function App(){
    const [selectedContent, setSelectedContent] = useState(null);

    return(
        <>
            <Header />
            <Titles setSelectedContent={setSelectedContent}/>
            <Content content = {selectedContent}/>
            <Footer />
        </>
    )
}