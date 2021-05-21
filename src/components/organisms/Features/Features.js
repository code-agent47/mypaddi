import React, { Component } from 'react';
import FeaturesStyle from './FeaturesStyle';   
import { connect } from 'react-redux';
import Img from '../../atoms/Img/Img';
import HeaderText from '../../atoms/HeaderText/Text';
import Text from '../../atoms/Text/Text';
import zone from '../../../assets/images/zone.png';
import onboarding from '../../../assets/images/onboarding.png';
import listen from '../../../assets/images/listen.png';
import { swipeHorizontally } from 'swipepackage';

class Features extends Component{

    componentDidMount(){
        this.invokeSlider();
    }

    invokeSlider(){
        swipeHorizontally(document.getElementsByClassName("features-container")[0],2);
    }

    render(){
        return (
            <>
                <FeaturesStyle>
                    <div className={`container`}>
                        <div className={`container-full center features-desc`}>
                            <HeaderText value="Features" />
                            <Text value="Explore the myPaddi app features" />
                        </div>
                        <div className={`container-full features-container`}>
                            <div className={`div-md-4 features-container__item`}>
                                <div className={`container-full features-container__item__cover`}>
                                    <Img image={zone} className={`img`} />
                                </div>
                                <div className={`container-full features-container__item__text`}>
                                    <HeaderText value="Explore the zone and interact with other younger people" className={`--move`} />
                                </div>
                            </div>
                            <div className={`div-md-4 features-container__item`}>
                                <div className={`container-full features-container__item__cover`}>
                                    <Img image={onboarding} className={`img`} />
                                </div>
                                <div className={`container-full features-container__item__text`}>
                                    <HeaderText value="Get help with any health issue by chatting with a Doctor or a Counsellor" />
                                </div>
                            </div>
                            <div className={`div-md-4 features-container__item`}>
                                <div className={`container-full features-container__item__cover`}>
                                    <Img image={listen} className={`img`} />
                                </div>
                                <div className={`container-full features-container__item__text`}>
                                    <HeaderText value="Listen to your favourite Audio file every day" className={`--move`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </FeaturesStyle>
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

export default connect(mapStateToProps, {}) (Features)
