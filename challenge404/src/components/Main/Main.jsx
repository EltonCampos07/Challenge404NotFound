import React from 'react'
import LeftBox from '../LeftBox'
import Scarecrow from '../../images/Scarecrow.png'
import "./style.css"


function Main() {
  return (
    <main>
        <section className = "Main-imagem">
            <img src= {Scarecrow} alt="Scarecrow" />
        </section>
        <LeftBox/>
    </main>
  )
}

export default Main;