import React, { Component } from 'react';
import FooterStyle from './FooterStyle';   
import { connect } from 'react-redux';
import Img from '../../atoms/Img/Img';
import twitter from '../../../assets/images/twitter.png';
import instagram from '../../../assets/images/instagram.png';
import fb from '../../../assets/images/fb.png';
import whatsapp from '../../../assets/images/whatsapp.png';
import HeaderText from '../../atoms/HeaderText/Text';

class Footer extends Component{

    render(){
        return (
            <>
                <FooterStyle>
                    <div className={`container`}>
                        <div className={`container-full center footer-socials`}>
                            <div className={`footer-socials__box`}>
                                <div className={`container-full`}>
                                    <Img image={twitter} />
                                    <Img image={instagram} />
                                    <Img image={fb} />
                                    <Img image={whatsapp} />
                                </div>
                            </div>
                        </div>
                        <div className={`container-full footer-text`}>
                            <HeaderText value="Copyright MOBicure Solution 2021, All right reserved" />
                        </div>
                    </div>
                </FooterStyle>
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

export default connect(mapStateToProps, {}) (Footer)
