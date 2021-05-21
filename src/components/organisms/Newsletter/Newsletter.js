import React, { Component } from 'react';
import NewsletterStyle from './NewsletterStyle';   
import { connect } from 'react-redux';
import HeaderText from '../../atoms/HeaderText/Text';
import Text from '../../atoms/Text/Text';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

class Newsletter extends Component{

    render(){
        return (
            <>
                <NewsletterStyle>
                   <div className={`container`}>
                       <div className={`container-full newsletter-desc`}>
                            <HeaderText value="Newsletter" />
                            <Text value="Get e-mail updates about our Latest news and special offers" />
                       </div>
                       <div className={`container-full center newsletter-form`}>
                           <div className={`div-lg-10 div-md-11 newsletter-form__container`}>
                               <div className={`container-full`}>
                                    <Input type="text" className="input" placeholder="Email address..." />
                                    <Button value="SUBMIT" className={`button`} />
                               </div>
                           </div>
                       </div>
                   </div>
                </NewsletterStyle>
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

export default connect(mapStateToProps, {}) (Newsletter)
