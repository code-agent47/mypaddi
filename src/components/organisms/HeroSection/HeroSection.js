import React, { Component } from 'react';
import HeroSectionStyle from './HeroSectionStyle';   
import { connect } from 'react-redux';
import HeaderText from '../../atoms/HeaderText/Text';
import Button from '../../atoms/Button/Button';

class HeroSection extends Component{

    render(){
        return (
            <>
                <HeroSectionStyle>
                    <div className={`container hero-section`}>
                        <div className={`transparent`}>
                            <div className={`div-lg-7 hero-section__text`}>
                                <HeaderText value="Order your" className={`hero-section__text__header`}/>
                                <h2 className={`hero-section__text__header`}>
                                    Sexual health <span> Products </span>
                                </h2>
                                <HeaderText className={'hero-section__text__desc'} value="myPaddi shop offers wide range of sexual health products, skincare products and pleasure. From sex toys, lubricants, HIV test kits, lingerie, contraceptives, Skincare products and condoms" />
                                <Button value="VISIT SHOP" className={`button`} />
                            </div>
                        </div>
                    </div>
                </HeroSectionStyle>
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

export default connect(mapStateToProps, {}) (HeroSection)
