import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import PropTypes from "prop-types";
import "./barChartCustomTool.css";
import { useDataActivity } from "../../data/getData";

/**
 *  tooltip of Bar chart
 *
 * @param {*} param0
 * @returns (custom tooltip)
 */

const CustomTooltip = ({ active, payload }) => {
    return active && payload ? (
        <div className="toolTip">
            <div className="poids">{`${payload[0].value} Kg`}</div>
            <div className="calories">{`${payload[1].value} KCal`}</div>
        </div>
    ) : null;
};

/**for get days of the month
 *
 * @param {string} date
 * @returns  days of the months
 */
const getDayNumber = (date) => {
    const objetDate = new Date(date);
    return objetDate.getDate();
};

/**function for showing  to bar chart activity
 * @component
 * @param {number} userID id of user
 * @returns (<AddBarChart />)
 */
const AddBarChart = ({ userID }) => {
    const getUserActivity = useDataActivity(userID);

    return (
        <div style={{ backgroundColor: "#FBFBFB", paddingLeft: "40px",marginLeft:'40px',paddingRight:'20px' }}>
            <header style={{ display: "flex", gap: "220px" }}>
                <h3>Activité quotidienne</h3>
                <div style={{ display: "flex", gap: "20px" }}>
                    <div
                        style={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "100px",
                                backgroundColor: "#282D30",
                                width: "10px",
                                height: "10px",
                            }}
                        ></div>
                        <span style={{ color: "#74798C", fontSize: "14px" }}>
                            {" "}
                            Poids (kg)
                        </span>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "5px",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                borderRadius: "100px",
                                backgroundColor: "#E60000",
                                width: "10px",
                                height: "10px",
                            }}
                        ></div>
                        <span style={{ color: "#74798C", fontSize: "14px" }}>
                            {" "}
                            Calories brûlées (kCal)
                        </span>
                    </div>
                </div>
            </header>

            <BarChart width={730} height={250} data={getUserActivity.sessions}>
                <CartesianGrid
                    strokeDasharray="3 3"
                    horizontal="true"
                    vertical=""
                />
                <XAxis dataKey="day" tickFormatter={getDayNumber} />
                <YAxis dataKey="calories" orientation="right" />
                <Tooltip content={CustomTooltip} />
                <Bar
                    dataKey="kilogram"
                    fill="#282D30"
                    barSize={7}
                    radius={[50, 50, 0, 0]}
                />
                <Bar
                    dataKey="calories"
                    fill="#E60000"
                    barSize={7}
                    radius={[50, 50, 0, 0]}
                />
            </BarChart>
        </div>
    );
};
AddBarChart.prototype = {
    userID: PropTypes.number.isRequired,
};
export default AddBarChart;
