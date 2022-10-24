import React from "react";
import { useParams } from "react-router-dom";
import CaloryProteinGlucideLipide from "../components/CaloryProteinGlucideLipide";
import { useData } from "../data/getData";
import caloriesIcon from "../images/caloriesIcon.png";
import protein from "../images/protein.png";
import apple from "../images/apple.png";
import cheeseburger from "../images/cheeseburger.png";
import styled from "styled-components";
import AddBarChart from "../components/Activity/AddBarChart";
import AddLineChart from "../components/DurationSession/AddLineChart";
import AddRadarChart from "../components/AddRadarChart";
import AddPieChart from "../components/AddPieChart";
import ErrorPage from "./ErrorPage";

/**function for showing profile page
 * @component
 * 
 * @returns (<AddPieChart />)
 */
const Dashboard = () => {
    const { id: userId } = useParams();
    const getUser = useData(userId);
    if (!getUser?.userName) return <ErrorPage props={'L`utilisateur est introuvable'}/>;
    
    return (
        <StyleMain>
            <StyleHeaderDiv>
                <StyleBonjourP>
                    Bonjour, <StyleNameSpan>{getUser.userName}</StyleNameSpan>
                </StyleBonjourP>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </StyleHeaderDiv>
            <StyleContainerMain>
                <StyleChartContainerDiv>
                    <AddBarChart userID={userId} />
                    <StyleDownChartContainerDiv>
                        <AddLineChart userID={userId} />
                        <AddRadarChart userID={userId} />
                        <AddPieChart dataOfPieChart={getUser.todayScore} />
                    </StyleDownChartContainerDiv>
                </StyleChartContainerDiv>
                <StyleAside>
                    <CaloryProteinGlucideLipide
                        CalorieSource={getUser.keyDataCalorie / 1000}
                        IconSource={caloriesIcon}
                        title={"Calories"}
                        unit={"kCal"}
                    />
                    <CaloryProteinGlucideLipide
                        CalorieSource={getUser.keyDataProtein}
                        IconSource={protein}
                        title={"Protoines"}
                        unit={"g"}
                    />
                    <CaloryProteinGlucideLipide
                        CalorieSource={getUser.keyDataCarbHid}
                        IconSource={apple}
                        title={"Glucides"}
                        unit={"g"}
                    />
                    <CaloryProteinGlucideLipide
                        CalorieSource={getUser.keyDataLipid}
                        IconSource={cheeseburger}
                        title={"Lipides"}
                        unit={"g"}
                    />
                </StyleAside>
            </StyleContainerMain>
        </StyleMain>
    );
};

export default Dashboard;

const StyleMain = styled.main`
    margin-left: 150px;
    margin-top: 50px;
`;
const StyleHeaderDiv = styled.div`
    margin-left: 30px;
`;
const StyleContainerMain = styled.main`
    display: flex;
    gap: 80px;
`;
const StyleAside = styled.aside`
    display: flex;
    flex-direction: column;
    height: 600px;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 40px;
`;
const StyleNameSpan = styled.span`
    color: #ff0101;
    font-size: 49px;
`;
const StyleBonjourP = styled.p`
    color: black;
    font-size: 48px;
    margin-bottom: 0;
`;
const StyleChartContainerDiv = styled.div`
    width: 750px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
`;
const StyleDownChartContainerDiv = styled.div`
    display: flex;
    width: 750px;
    gap: 10px;
    justify-content: space-between;
`;
