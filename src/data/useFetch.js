import { useEffect, useState } from "react";
import {
    UserActivity,
    UserPerformance,
    User,
    UserAverage,
} from "./UserClasses";


/** for get information of the users
 *
 * @param {number} userId id of the user
 * @returns {class} User /general information of the user
 */
export const useData = (userId) => {
    const fetchUrl = "http://localhost:3000/user/" + userId;
    const fetchedValue = useFetch(fetchUrl);

    return new User(fetchedValue.data);
};



/**We get the kilogram et calories of the user
 *
 * @param {number} userId id of the user
 * @returns {class} UserActivity  
 */

export const useDataActivity = (userId) => {
    const endpoint = "http://localhost:3000/user/" + userId + "/activity";
    const getUserOfActivity = useFetch(endpoint);

    return new UserActivity(getUserOfActivity.data);
};


/**We get the data of the working time of the jour
 *
 * @param {number} userId id of the user
 * @returns {class} UserAverage/ duration session of the user
 */

export const useDataAverage = (userId) => {
    const endpoint = "http://localhost:3000/user/" + userId + "/average-sessions";
    const getUserOfAverage = useFetch(endpoint);

    return new UserAverage(getUserOfAverage.data);
};

/**We get kind of the activity of the user
 *
 * @param {number} userId id of the user
 * @returns {class} UserPerformance / kind of the activity
 */
export const useDataPerformance = (userId) => {
    const endpoint = "http://localhost:3000/user/" + userId + "/performance";
    const getUserOfAverage = useFetch(endpoint);

    return new UserPerformance(getUserOfAverage.data);
};

/** fetch the data from backend
 *
 * @param {string} url url of the backend
 * @returns {object} includes data,loading,error
 */
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data.data))
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
