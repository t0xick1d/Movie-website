import React from 'react'
import s from './login.module.css'

const LogIn = () => {
    return(
        <div className = {s.header}>
            <div className = {s.contbutton}>
                <button>Вход</button>
                <button>Регистрация</button> 
            </div> 
        </div>
    )
}

export default LogIn;