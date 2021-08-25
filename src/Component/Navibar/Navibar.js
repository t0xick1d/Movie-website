import React, {useState} from 'react'
import s from './Navibar.module.css'
import {Link} from 'react-router-dom';
import logo from '../../logo2.jpg'
import cn from 'classnames';


const Navibar = () => {

    
    const button = {
        katalog: [{name:'Популярные', path:'/pages/Popular'},{name:'Сейчас смотрят', path:'/pages/WatchingNow'},{name:'Ожидаемые',path:'/pages/expected' },{name:'Лучшие',path:'/pages/best' }],
        serials: [{name:'Популярные', path:'/pages/PopularS'},{name:'Сейчас смотрят', path:'/pages/WatchingNowS'},{name:'По телевидению',path:'/pages/onTv' },{name:'Лучшие',path:'/pages/best' }],
        other: [{name:'Обсуждения', path:'/pages/Discussions'},{name:'Доска почёта', path:'/pages/HallofFame'},{name:'Поддержка', path:'/pages/Support'}],
    }

    const [style, setStyle] = useState({display:'none'});
    const [active, setActive] = useState(false)

    const togleActive = () => {
        if(active === false){
           
            return true
        }
        
        return false
    }
    
    const crateButtonGroup = (array) => {
            
            return array.map( p => {
                
                return(<div><Link className={s.buttonlink} to ={p.path}>{p.name}</Link></div>)})
        }
    
  
    return (
        <div className={s.header}>
            <div className={s.container}>
                
                    <div className={s.body}>
                        <div className={s.bodylogo}>
                            <img
                            src={logo}
                            className={s.logo}
                            alt=""
                            /> 
                        </div>
                    <div className={cn({[s.burger_active]:active},s.burger)} onClick ={()=>{setActive(togleActive())}} >
                        <span ></span>
                    </div>
                    <div className={cn({[s.headermenu_active]:active},s.headermenu)}>
                        <Link className={s.headerlink} 
                            onMouseEnter={e => {setStyle({display: 'block'})}}
                            onMouseLeave={e => {setStyle({display: 'none'})}}>Фильмы
                            {style.display === 'block' || style.display === 'button' ? <div className={s.buttonkatalog}>
                               {crateButtonGroup(button.katalog)}
                            </div>: null}
                        </Link>
                            
                        <Link className={s.headerlink} 
                            onMouseEnter={e => {setStyle({display: 'serial'})}}
                            onMouseLeave={e => {setStyle({display: 'none'})}}>Сериалы
                            {style.display === 'serial' || style.display === 'button' ? <div className={s.buttonkatalog}>
                               {crateButtonGroup(button.serials)}
                            </div>: null}
                        </Link>
                        <Link className={s.headerlink} to ="/pages/People" >Люди</Link>
                        <Link className={s.headerlink} 
                            onMouseEnter={e => {setStyle({display: 'other'})}}
                            onMouseLeave={e => {setStyle({display: 'none'})}}>Ещё
                            {style.display === 'other' || style.display === 'button' ? <div className={s.buttonkatalog}>
                               {crateButtonGroup(button.other)}
                            </div>: null}
                        </Link>
                    </div>
                   
                    </div>
                        
                </div>
        </div>
        
    )
}

export default Navibar