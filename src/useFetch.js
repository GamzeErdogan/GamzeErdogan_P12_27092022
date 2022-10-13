import { useEffect, useState } from "react";

/** for get informations of the users
 * 
 * @param {number} userId id of the user
 * @returns {object} general information of the user
 */
export const  useData = ( userId) =>{
        return useFetch("http://localhost:3000/user/" + userId);
}


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
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => setData(data.data))
        .catch((err) => {
            setError(err)
        })
        .finally(() => {    
            setLoading(false)
        })
    }, [url]);

    return {data, loading, error}
}

export default useFetch;