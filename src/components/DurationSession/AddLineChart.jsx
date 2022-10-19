import React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import styled from "styled-components";
import "./lineChartCustomTool.css";
import PropTypes from "prop-types";
import { useDataAverage } from "../../data/getData";
// import {useDataAverage} from '../../data/USE_MOCK'

/**
 *  tooltip of lineChart
 *
 * @param {*} param0
 * @returns (custom tooltip)
 */
const CustomTooltip = ({ active, payload }) => {
    return active && payload ? (
        <div className="tool-tip">
            <div className="poids">{`${payload[0].value} min`}</div>
        </div>
    ) : null;
};

const StyleContainerLineChart = styled.div`
    width: 258px;
    height: 263px;
    background: #ff0000;
    color: white;
    border-radius: 5px;
`;

/**function  for showing duration session to line chart
 * @component
 * @param {value} userId
 * @return  (<AddLineChart />)
 */
const AddLineChart = ({ userID }) => {
    const getUserAverage = useDataAverage(userID);

    const days = {
        1: "L",
        2: "M",
        3: "M",
        4: "J",
        5: "V",
        6: "S",
        7: "D",
    };

    /** for get the days
     *
     * @param {number} indexDay
     * @returns {string} letter of days
     */
    const getDay = (indexDay) => {
        return days[indexDay];
    };

    return (
        <StyleContainerLineChart>
            <h5 style={{ opacity: "0.5", paddingLeft: "20px" }}>
                Durée moyenne des{" "}
            </h5>
            <h5 style={{ opacity: "0.5", paddingLeft: "20px" }}>sessions </h5>
            <LineChart
                width={258}
                height={150}
                data={getUserAverage.sessions}
                margin={{
                    top: 0,
                    right: 5,
                    left: 5,
                    bottom: 0,
                }}
            >
                <XAxis
                    dataKey="day"
                    stroke="white"
                    opacity={0.5}
                    tickLine={false}
                    dy={-1}
                    tickFormatter={getDay}
                />

                <Tooltip content={CustomTooltip} />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="white"
                    fill="white"
                />
            </LineChart>
        </StyleContainerLineChart>
    );
};
AddLineChart.prototype = {
    userID: PropTypes.number.isRequired,
};
export default AddLineChart;
