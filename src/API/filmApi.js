import * as axios from 'axios'

const apiKey = 'api_key=7b36b29d9e4c5abba40ea0b1383df48c'
const apiKey4V= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjM2YjI5ZDllNGM1YWJiYTQwZWEwYjEzODNkZjQ4YyIsInN1YiI6IjYwZTA1ZjVhMWU5MjI1MDAyY2MyYzY1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x_UdFKv0geWukJHhpuzBRmLPcdHo4B4TFSpeQ4DT5EI'

const instance  = axios.create({
    
    baseURL: 'https://api.themoviedb.org/3',
    
    
}); 

export const filmApi = {

    getFilms (currentPage = 1 ) {
        return instance.get(`/movie/popular?`+ apiKey + `&language=ru-Ru&page=${currentPage}`)
            .then(response => {
                return response.data;
            })
    }

}