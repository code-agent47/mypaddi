import styled from 'styled-components';
import bg from '../../../assets/images/bg.png';
import {minWidth, maxWidth} from '../../../helpers/mixins';

const HeroSectionStyle = styled.section`
    margin-top:135px;
    width:100%;

    ${
        maxWidth.sm`
            margin-top:53px;
        `
    }
    .transparent{
        ${
            minWidth.lg`
                background:transparent;
                background-image:url(${bg});
                background-repeat:no-repeat;
                background-position:right;
                background-size:52%;
            `
        }
        position:relative;
        left:0;
        height:100%;
        top:0;
        width:100%:
    }
    .hero-section__text{
        .hero-section__text__header{
            color:#161d25;
            font-family:Google Sans;
            font-size: 3.5em;
            font-weight:600;
            line-height:1.35;
            span{
                color:#4c4bfb;
                font-family:Google Sans;
            }
            ${
                maxWidth.sm`
                    font-size:2.8em;
                `
            }
        }
        .hero-section__text__desc{
            color:#b3afba;
            font-family:Google Sans;
            font-size: 1.4em;
            font-weight:600;
            letter-spacing:1px;
            line-height:1.7;
            margin-top:45px;
            ${
                maxWidth.sm`
                    font-size:1.25em;
                    margin-top:30px;
                `
            }
        }
        .button{
            background:#4d4cfb;
            border-radius:6px;
            color:white;
            font-family: Google Sans;
            font-size:1.3em;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            height:65px;
            line-height: 1.31;
            letter-spacing:1px;
            margin-top:62px;
            object-fit: contain;
            width:48%;
            ${
                maxWidth.sm`
                    font-size:1.1em;
                    height:50px;
                    margin-top:53px;
                    width:70%;
                `
            }
        }
    }
`

export default HeroSectionStyle;   