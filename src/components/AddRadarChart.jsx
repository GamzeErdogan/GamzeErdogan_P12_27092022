import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useDataPerformance } from "../data/getData";
// import { useDataPerformance } from '../data/USE_MOCK';

const StyleContainerRadarChartDiv = styled.div`
    width: 258px;
    height: 263px;
    background-color: #282d30;
    border-radius: 5px;
`;
/**function for showing  kinds of the activity of the user with radar chart
 * @component
 * @param {value} userID
 * @returns (<AddRadarChart />)
 */

const AddRadarChart = ({ userID }) => {
    const getUserPerformance = useDataPerformance(userID);
    console.log("getUserPerformance", getUserPerformance);

    const kind = {
        1: "Intensité",
        2: "Vitesse",
        3: "Force",
        4: "Endurance",
        5: "Energie",
        6: "Cardio",
    };

    /**for get kind
     *
     * @param {number} indexKind
     * @returns {string} kind
     */
    const getKind = (indexKind) => {
        return kind[indexKind];
    };
    return (
        <StyleContainerRadarChartDiv>
            <RadarChart
                outerRadius={90}
                width={268}
                height={263}
                data={getUserPerformance.data}
            >
                <PolarGrid />
                <PolarAngleAxis
                    className="text-information"
                    stroke="white"
                    dataKey="kind"
                    domain={[0, 150]}
                    axisLine={false}
                    tickCount={6}
                    tickFormatter={getKind}
                    fontSize="12px"
                />
                <Radar
                    dataKey="value"
                    stroke="none"
                    fill="red"
                    fillOpacity={0.6}
                />
            </RadarChart>
        </StyleContainerRadarChartDiv>
    );
};

AddRadarChart.prototype = {
    userID: PropTypes.number.isRequired,
};
export default AddRadarChart;
