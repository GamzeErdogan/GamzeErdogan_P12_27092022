import React from 'react'
import {useParams} from 'react-router-dom'
import CaloryProteinGlucideLipide from '../components/CaloryProteinGlucideLipide';
import { useData } from '../useFetch';
import caloriesIcon from '../images/caloriesIcon.png';
import protein from '../images/protein.png'
import apple from '../images/apple.png'
import cheeseburger from '../images/cheeseburger.png'
import styled from 'styled-components';
import AddBarChart from '../components/Activity/AddBarChart';
import AddLineChart from '../components/DurationSession/AddLineChart';
import AddRadarChart from '../components/AddRadarChart';
import AddPieChart from '../components/AddPieChart';

const StyleMain = styled.main`
    margin-left:150px;
    margin-top:50px;
`
const StyleHeaderDiv = styled.div`
    margin-left:30px;
`
const StyleContainerMain = styled.main`
    display:flex;
    gap:80px;
`
const StyleAside = styled.aside`
    display:flex;
    flex-direction:column;
    height:600px;
    justify-content:space-between;
    align-items:flex-end;
    margin-right:40px;
`
const StyleNameSpan = styled.span`
    color:#ff0101;
    font-size:49px;
`
const StyleBonjourP = styled.p`
    color:black;
    font-size:48px;
    margin-bottom:0;
`
const StyleChartContainerDiv = styled.div`
   width:750px;
   height:350px;
   display:flex;
   flex-direction:column;
   justify-content:space-between;
   align-items:center;
   gap:50px;
   
`
const StyleDownChartContainerDiv = styled.div`
    display:flex;
    width:750px;
    gap:10px;
    justify-content:space-between;
`

/**function for the display all the data of the user with charts
 * @component
 * @returns <Dashboard />
 */
const Dashboard = () => {
    const {id : params}= useParams();
    const  {data : userInformation}  = useData(params);
    console.log(userInformation);
   

  return (
   <StyleMain>
        <StyleHeaderDiv>
          <StyleBonjourP>Bonjour, <StyleNameSpan>{userInformation?.userInfos.firstName}</StyleNameSpan></StyleBonjourP>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </StyleHeaderDiv>
        <StyleContainerMain>
            <StyleChartContainerDiv>
                <AddBarChart userID={params}/>
                <StyleDownChartContainerDiv>
                    <AddLineChart userID={params}/>
                    <AddRadarChart userID={params} />
                    {userInformation?.todayScore ?  <AddPieChart props={userInformation?.todayScore}/> :
                     <AddPieChart props={userInformation?.score}/>}
                </StyleDownChartContainerDiv>
            </StyleChartContainerDiv> 
            <StyleAside>
                <CaloryProteinGlucideLipide  CalorieSource={userInformation?.keyData.calorieCount/1000} IconSource={caloriesIcon} title={'Calories'} unit={'kCal'}/>
                <CaloryProteinGlucideLipide  CalorieSource={userInformation?.keyData.proteinCount} IconSource={protein} title={'Protoines'} unit={'g'}/>
                <CaloryProteinGlucideLipide  CalorieSource={userInformation?.keyData.carbohydrateCount} IconSource={apple} title={'Glucides'} unit={'g'}/>
                <CaloryProteinGlucideLipide  CalorieSource={userInformation?.keyData.lipidCount} IconSource={cheeseburger} title={'Lipides'} unit={'g'}/>
            </StyleAside>
        </StyleContainerMain>
    </StyleMain>

  )
}

export default Dashboard