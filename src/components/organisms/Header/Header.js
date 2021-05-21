import React, { Component } from 'react';
import HeaderStyle from './HeaderStyle';   
import { connect } from 'react-redux';
import Img from '../../atoms/Img/Img';
import Button from '../../atoms/Button/Button';
import logo from '../../../assets/images/logo.png';

class Header extends Component{

    render(){
        return (
            <>
                <HeaderStyle>
                    <div className={`container`}>
                        <div className={`logo`}>
                            <Img image={logo} className={`img`} alt="logo" />
                        </div>
                        <div className={`auth-items`}>
                            <Button value="LOG IN" className={`button --login`} />
                            <Button value="SIGN UP" className={`button --signup`} />
                        </div>
                    </div>
                </HeaderStyle>
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

export default connect(mapStateToProps, {}) (Header)
