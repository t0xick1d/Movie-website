import { connect } from 'react-redux';
import React from 'react';
import {isFethcingAC, getFilms} from '../../redux/topFilmReducer';
import { withRouter } from 'react-router-dom';
import { getFilmsSel, getIsFethcing} from '../../redux/filmsSelectors'

let mapStateToProps = (state) => {
   
    return {

        films: getFilmsSel(state),
        isFeching: getIsFethcing(state)
        
      
    }
};

let withUrlHomePageContainerComponenet = withRouter(HomePageContainer)

export default connect(mapStateToProps,{
   setFilmsAC, isFethcingAC,getFilms
})(withUrlHomePageContainerComponenet);