import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyleGrandDiv = styled.div`
    width:258px;
    height:124px;
    border-radious:5px;
    background-color:#FBFBFB;
    display:flex;
    justify-content:space-around;
    align-items:center;
    img {
        width:64px;
        height:64px;
    }
`
const StyleCaloryDiv = styled.div`
    width:80px;
    height:60px;
    display:flex;
    justify-content:center;
    align-items:baseline;
    flex-direction:column;
    gap:10px;
`
const StyleCaloriP = styled.p`
    font-size:20px;
    font-weight:700;
    margin:0;
`
const StyleTitleP = styled.p`
    font-size:14px;
    font-weight:500;
    color:#74798C;
    margin:0;
`

/**function for card information of the user
 * @component 
 * @returns ( <CaloryProteinGlucideLipid />)
 */

const CaloryProteinGlucideLipide = (props) => {
  return (
   <StyleGrandDiv>
            <img src={props.IconSource}  alt='icon' />
        <StyleCaloryDiv>
            <StyleCaloriP>{props.CalorieSource}{props.unit}</StyleCaloriP>
            <StyleTitleP>{props.title}</StyleTitleP>
        </StyleCaloryDiv>
   </StyleGrandDiv>
  )
}

CaloryProteinGlucideLipide.prototype = {
    IconSource : PropTypes.string.isRequired,
    CalorieSource : PropTypes.number.isRequired,
    unit : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired
}

export default CaloryProteinGlucideLipide