import React, { Component } from 'react';
import HomePageTemplateStyle from './HomePageTemplateStyle';   
import { connect } from 'react-redux';
import Header from '../../organisms/Header/Header';
import HeroSection from '../../organisms/HeroSection/HeroSection';
import FeaturedOn from '../../organisms/FeaturedOn/FeaturedOn';
import Features from '../../organisms/Features/Features';
import Newsletter from '../../organisms/Newsletter/Newsletter';
import Footer from '../../organisms/Footer/Footer';

class HomepageTemplate extends Component{
    render(){
        return (
            <>
                <HomePageTemplateStyle>
                    <div className={`container-full`}>
                        <Header />
                        <HeroSection />
                        <FeaturedOn />
                        <Features />
                        <Newsletter />
                        <Footer />
                    </div>
                </HomePageTemplateStyle>
            </>
        );
    }
}

function mapStateToProps(state){
    console.log(state);
    return{
        dataState: state.dataReducer,
        submitState: state.submitReducer
    }
}

export default connect(mapStateToProps, {}) (HomepageTemplate)
