import styled from 'styled-components';
import {maxWidth} from '../../../helpers/mixins';

const FooterStyle = styled.footer`  
    margin-bottom:60px;
    margin-top:110px;
    width:100%;

    ${
        maxWidth.sm`
            margin-bottom:35px;
            margin-top:90px;
        `
    }

    .footer-socials__box{
        -ms-flex: 0 0 225px;
        -webkit-flex: 0 0 225px;
        flex: 0 0 225px;
        max-width: 225px;
        ${
            maxWidth.sm`
                -ms-flex: 0 0 165px;
                -webkit-flex: 0 0 165px;
                flex: 0 0 165px;
                max-width: 165px;
            `
        }
        img{
            height:auto;
            width:33px;
            ${
                maxWidth.sm`
                    width:25px;
                `  
            }
        }
    }
    .footer-text{
        h2{
            color:#ababab;
            font-family: Google Sans;
            font-size: 1.28em;
            font-weight: bold;
            letter-spacing:1px;
            margin-top:40px;
            text-align:center;
            width:100%;
            ${
                maxWidth.sm`
                    font-size:1.1em;
                    line-height:1.5;
                    margin-top:30px;
                `
            }
        }
    }
`

export default FooterStyle;   