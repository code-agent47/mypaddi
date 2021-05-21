import styled from 'styled-components';
import {maxWidth} from '../../../helpers/mixins';

const FeaturedOnStyle = styled.section`
    margin-top:160px;
    width:100%;

    ${
        maxWidth.sm`
            margin-top:100px;
        `
    }
    
   .newsletter-desc{
        h2{
            color:#0f0f0f;
            font-family: Google Sans;
            font-size: 2.6em;
            font-weight: bold;
            letter-spacing:1px;
            text-align:center;
            width:100%;
            ${
                maxWidth.sm`
                    font-size:2.2em;
                `
            }
        }
        p{
            color:#b4b0bb;
            font-family: Google Sans;
            font-size: 1.6em;
            font-weight: bold;
            letter-spacing:1px;
            margin-top:23px;
            text-align:center;
            width:100%;
            ${
                maxWidth.sm`
                    font-size:1.3em;
                    line-height:1.4;
                    margin-top:17px;
                `
            }
        }
   }
   .newsletter-form{
       margin-top:60px;
   }
   .newsletter-form__container{
       .input{
           border:2px solid #eeeeee;
           border-radius:8px;
           box-sizing:border-box;
           color:#a7a7a7;
           font-family: Google Sans;
           font-size: 1.3em;
           font-weight: bold;
           height:70px;
           padding-left:28px;
           width:67%;
           &::placeholder{
            color:#a7a7a7;
           }
           ${
               maxWidth.sm`
                    font-size:1.2em;
                    height:55px;
                    padding-left:20px;
                    width:100%;
               `
           }
       }
       .button{
            background:#4d4cfb;
            border-radius:8px;
            color:white;
            font-family: Google Sans;
            font-size: 1.3em;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            height:70px;
            line-height: 1.31;
            letter-spacing: 1px;
            object-fit: contain;
            width:30%;
            ${
                maxWidth.sm`
                    font-size:1.2em;
                    height:55px;
                    margin-top:25px;
                    width:50%;
                `
            }
       }
   }
`

export default FeaturedOnStyle;   