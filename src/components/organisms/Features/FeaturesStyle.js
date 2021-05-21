import styled from 'styled-components';
import {maxWidth} from '../../../helpers/mixins';

const FeaturesStyle = styled.section`
    margin-top:135px;
    width:100%;

    ${
        maxWidth.sm`
            margin-top:90px;
        `
    }
    .features-desc{
        h2{
            color:#303a71;
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
            color:#adb0cf;
            font-family: Google Sans;
            font-size: 1.6em;
            font-style:italic;
            font-weight: bold;
            letter-spacing:1px;
            margin-top:25px;
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
    .features-container{
        margin-top:90px;
        ${
            maxWidth.sm`
                margin-top:75px;
            `
        }
        ${
            maxWidth.lg`
                flex-wrap:nowrap;
                overflow:hidden;
            `
        }
    }
    .features-container__item{
        border:2px solid #eeeeee;
        border-radius:10px;
        box-sizing:border-box;
        padding-top:60px;
        ${
            maxWidth.sm`
                padding-top:40px;
            `
        }
        ${
            maxWidth.lg`
                -ms-flex: 0 0 250px;
                -webkit-flex: 0 0 250px;
                flex: 0 0 250px;
                max-width: 250px;
                margin-right:30px;
            `
        }
    }
    .features-container__item__cover{
        box-sizing:border-box;
        padding-left:50px;
        padding-right:50px;
        ${
            maxWidth.sm`
                padding-left:35px;
                padding-right:35px;
            `
        }
    }
    .features-container__item__text{
        box-sizing:border-box;
        padding-bottom:53px;
        padding-left:20px;
        padding-right:20px;
        padding-top:35px;
        ${
            maxWidth.sm`
                padding-bottom:30px;
                padding-left:20px;
                padding-right:20px;
                padding-top:20px;
            `
        }
        h2{
            color:#373737;
            font-family: Google Sans;
            font-size: 1.15em;
            font-weight: bold;
            letter-spacing:1px;
            line-height:1.4;
            text-align:center;
            ${
                maxWidth.sm`
                    line-height:1.5;
                `
            }
        }
        .--move{
            margin-top:23px;
        }
    }
`

export default FeaturesStyle;   