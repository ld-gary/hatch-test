export interface UserAppProfile {
    hutchId: string;
    appId: string;
    flags: number;
    deviceId: string;
    socialName: string;
    region: string;
    registrationDate: Date;
    lastLoginDate: Date;
    cohorts: object;
    hutchAccountRerouteId: string;
    hutchAccountRerouteRegion: string;
    activeQuests: number;
    completedQuests: number;
    claimedQuests: number;
    nextQuestActiveAt: Date;
    previousLoginDate: Date;
    hardCurrency1: number;
    hardCurrency2: number;
    hardCurrency3: number;
    softCurrency1: number;
    bronzeKeys: number;
    silverKeys: number;
    goldKeys: number;
    xp: number;
    level: number;
    garageSlotsUsed: number;
    trophies: number;
    locale: string;
}