/**
 * The user class which corresponds to fetched info from Api/Mock
 */
export class User {
    constructor(data) {
        this.id = data?.id;
        this.userInfos = data?.userInfos;
        this.userName = data?.userInfos?.firstName;
        this.todayScore = data?.todayScore;
        this.keyDataCalorie = data?.keyData?.calorieCount;
        this.keyDataProtein = data?.keyData?.proteinCount;
        this.keyDataCarbHid = data?.keyData?.carbohydrateCount;
        this.keyDataLipid = data?.keyData?.lipidCount;
        if (data?.score) {
            this.todayScore = data?.score;
        }
    }
}

export class UserActivity {
    constructor(data) {
        this.userId = data?.userId;
        this.sessions = data?.sessions;
    }
}

export class UserAverage {
    constructor(data) {
        this.sessions = data?.sessions;
        this.day = data?.day;
    }
}

export class UserPerformance {
    constructor(data) {
        this.userId = data?.userId;
        this.kind = data?.kind;
        this.data = data?.data;
    }
}
