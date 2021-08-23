import React from 'react'
import imgTop from '../../imegTop.png'
import s from './login.module.css'

const LogIn = () => {
    return(
        <div className = {s.header}>
            {/* <div>
               <img
                src ={imgTop} /> 
            </div> */}
            <div className = {s.contbutton}>
                <button>Вход</button>
                <button>Регистрация</button> 
            </div> 
        </div>
    )
}

export default LogIn;