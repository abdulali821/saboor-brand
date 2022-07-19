import React, { useState } from 'react'
import CardList from './card/CardList';

const Categories = () => {
    const [catName, setCatName] = useState('Retails');
    const handleClick = () =>{
        catName === "Retails"?
        setCatName("Wholesales"):
        setCatName("Retails")
    }
  return (
    <>
        <div id="categories">
            <div className="container">
                <div className="title">
                    <i onClick={handleClick} className="bi bi-chevron-left" style={{fontSize: '30px'}}></i>
                    <div className="cat-text">
                        <h1>
                            {catName}
                        </h1>
                        <div className='underline'></div>
                    </div>
                    <i onClick={handleClick} className="bi bi-chevron-right" style={{fontSize: '30px'}}></i>
                </div>
                <div className="gallery">
                    <CardList/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categories