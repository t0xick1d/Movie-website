import React from 'react'
import s from './HomePage.module.css'

const HomePage = () =>{
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.search}>
                    <div className={s.titleSearch}>Добро пожаловать.Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</div>
                    <div className={s.search_input}>
                        
                        <input/>
                        <button>Поиск</button>
                    </div>  
                </div> 
                <div className={s.mostPopular}>
                    <div className={s.mostPopularTitle}>
                        Что популярно сегодня
                    </div>
                    <div className={s.blockCardFilms}>
                        <div className={s.cardFilm}></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;