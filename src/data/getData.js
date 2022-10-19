import {
    useData as mockUseData,
    useDataActivity as mockUseDataActivity,
    useDataAverage as mockUseDataAverage,
    useDataPerformance as mocUseDataPerformance,
} from "./USE_MOCK";
import {
    useData as apiUseData,
    useDataActivity as apiUseDataActivity,
    useDataAverage as apiUseDataAverage,
    useDataPerformance as apiUseDataPerformance,
} from "./useFetch";
import { MOCK_ACTIVE } from "./index";

/**if mock=true, this function calls Mock data
 *
 * @param {number} userId id of user
 */
export const useData = (userId) =>
    MOCK_ACTIVE ? mockUseData(userId) : apiUseData(userId);

/**if mock=true, this function calls Mock data Activity of user
 *
 * @param {number} userId id of user
 */
export const useDataActivity = (userId) =>
    MOCK_ACTIVE ? mockUseDataActivity(userId) : apiUseDataActivity(userId);

/**if mock=true, this function calls Mock data Average of user
 *
 * @param {number} userId id of user
 */
export const useDataAverage = (userId) =>
    MOCK_ACTIVE ? mockUseDataAverage(userId) : apiUseDataAverage(userId);

/**if mock=true, this function calls Mock data Performance of user
 *
 * @param {number} userId
 */
export const useDataPerformance = (userId) =>
    MOCK_ACTIVE ? mocUseDataPerformance(userId) : apiUseDataPerformance(userId);
