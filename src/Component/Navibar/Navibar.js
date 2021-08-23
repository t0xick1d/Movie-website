import React, {useState} from 'react'
import s from './Navibar.module.css'
import {Link} from 'react-router-dom';
import logo from '../../logo2.jpg'
import imgTop from '../../imegTop.png'
import cn from 'classnames';


const Navibar = () => {

    const [style, setStyle] = useState({display: 'none'});
    const [active, setActive] = useState(false)

    const togleActive = () => {
        if(active === false){
           
            return true
        }
        
        return false
    }
    
   
    return (
        <div className={s.header}>
            {/* <div className={s.imgbackroundblock}>
               <img
                src = {imgTop}
                
                /> 
            </div> */}
            
            <div className={s.container}>
                
                    <div className={s.body}>
                        <div className={s.bodylogo}>
                            <img
                            src={logo}
                            className={s.logo}
                            /> 
                        </div>
                        
                    
                    {/* <div className={styleBurger.burger} active={} onClick ={()=>{setstyleBurger(togleBurger())}} > */}
                    <div className={cn({[s.burger_active]:active},s.burger)} onClick ={()=>{setActive(togleActive())}} >
                        <span ></span>
                    </div>
                    <div className={cn({[s.headermenu_active]:active},s.headermenu)}>
                        <Link className={s.headerlink}>Главная</Link>
                        <Link className={s.headerlink} 
                            onMouseEnter={e => {setStyle({display: 'block'})}}
                            onMouseLeave={e => {setStyle({display: 'none'})
                            }}>Каталог</Link>
                        <Link className={s.headerlink} >ТОП-100</Link>
                        <Link className={s.headerlink} >Случайное</Link>
                        <Link className={s.headerlink} >Сообщество</Link>
                        <Link className={s.headerlink} >Помощь</Link>
                    </div>
                   
                    </div>
                        
                </div>
        </div>
        
    )
}

export default Navibar