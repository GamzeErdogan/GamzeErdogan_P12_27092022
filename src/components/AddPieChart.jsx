import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const StyleContainerPieChartDiv = styled.div`
  width:258px;
  height:263px;
  background: #FBFBFB;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  position:relative;
  h3{
    position:absolute;
    top:20px;
    left:40px;
  }
`
const StyleJUstePieChartDiv = styled.div`
  width:258px;
  height:250px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  margin-top:20px;
`
const StyleScoreInfosDiv = styled.div`
  position:absolute;
  top:35%;
  left:40%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:7px;
  `
const StyleScoreValueDiv =styled.div`
  font-size:20px;
  font-weight:bold;
`
const StyleScoreTextP = styled.p`
  font-weight:0;
  font-size:16px;
  margin:0;
`
/**function for showing  score with pie chart
 * @component
 * @param {number} score score of the user
 * @returns (<AddPieChart />)
 */

const AddPieChart = ({dataOfPieChart}) => {
 
  return (
    <StyleContainerPieChartDiv>
        <h3>Score</h3>
        <StyleJUstePieChartDiv >
            <PieChart width={250} height={250}>
                        <Pie
                            data={[
                              {  value:dataOfPieChart},
                              {  value: 1 }]}
                            dataKey="value"
                            innerRadius={70}
                            outerRadius={80}
                            startAngle={90}
                            endAngle={450}
                            fill="transparent"
                            stroke="transparent"
                        >
                            <Cell fill="red" />
                            <Cell fill="white" />
                        </Pie>
            </PieChart>
            <StyleScoreInfosDiv>
                    <StyleScoreValueDiv>{dataOfPieChart * 100}%</StyleScoreValueDiv>
                    <StyleScoreTextP>de votre</StyleScoreTextP>
                    <StyleScoreTextP>objectif</StyleScoreTextP>
            </StyleScoreInfosDiv>
        </StyleJUstePieChartDiv>
    </StyleContainerPieChartDiv>
  )
}

AddPieChart.prototype = {
  dataOfPieChart : PropTypes.number.isRequired
}
export default AddPieChart