import React, { Component } from 'react';
import FeaturedOnStyle from './FeaturedOnStyle';   
import { connect } from 'react-redux';
import Img from '../../atoms/Img/Img';
import featured from '../../../assets/images/featured-on.png';

class FeaturedOn extends Component{

    render(){
        return (
            <>
                <FeaturedOnStyle>
                    <div className={`container center featured-on`}>
                        <div className={`div-lg-8 div-md-10`}>
                            <Img image={featured} className={`img`} />
                        </div>
                    </div>
                </FeaturedOnStyle>
            </>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        authState: state.signinReducer,
        dataState: state.dataReducer,
        submitState: state.submitReducer,
        cartState: state.cartReducer
    }
}

export default connect(mapStateToProps, {}) (FeaturedOn)
