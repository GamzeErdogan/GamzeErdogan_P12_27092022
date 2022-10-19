import {
    USER_MAIN_DATA,
    USER_ACTIVITY,
    USER_AVERAGE_SESSIONS,
    USER_PERFORMANCE,
} from "./MOCK";
import {
    User,
    UserActivity,
    UserAverage,
    UserPerformance,
} from "./UserClasses";

/**
 *
 * @param {number} userId
 * @returns {class} User of chosen user
 */
export const useData = (userId) => {
    return new User(USER_MAIN_DATA.find((item) => (item.id = userId)));
};

/**
 *
 * @param {number} userId
 * @returns {class} UserActivity of chosen user
 */
export const useDataActivity = (userId) => {
    return new UserActivity(
        USER_ACTIVITY.find((item) => (item.userId = userId))
    );
};

/**
 *
 * @param {number} userId
 * @returns {class} UserAverage of chosen user
 */
export const useDataAverage = (userId) => {
    return new UserAverage(
        USER_AVERAGE_SESSIONS.find((item) => (item.userId = userId))
    );
};

/**
 *
 * @param {number} userId
 * @returns {class} UserPerformance of chosen user
 */
export const useDataPerformance = (userId) => {
    return new UserPerformance(
        USER_PERFORMANCE.find((item) => (item.userId = userId))
    );
};
