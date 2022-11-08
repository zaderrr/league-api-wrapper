"use strict";

import {
    SummonerMethods,
    Route,
    SummonerResponse,
    MatchesMethods,
    MatchList,
    Match,
    MatchListQuery
} from "./@types/index.js";

export default class LolApi {
    apiKey: string;
    constructor(_apiKey: string) {
        this.apiKey = _apiKey;
    }

    get summoner() {
        return {
            getSummonerBySummonerName: (
                summonerName: string,
                server: Route
            ): Promise<SummonerResponse> =>
                SummonerMethods.getSummoner({
                    endpoint: "by-name/",
                    identifier: summonerName,
                    apiKey: this.apiKey,
                    route: server
                }),
            getSummonerBySummonerId: (
                summonerId: string,
                server: Route
            ): Promise<SummonerResponse> =>
                SummonerMethods.getSummoner({
                    endpoint: "",
                    identifier: summonerId,
                    apiKey: this.apiKey,
                    route: server
                }),
            getSummonerByAccountID: (
                accountID: string,
                server: Route
            ): Promise<SummonerResponse> =>
                SummonerMethods.getSummoner({
                    endpoint: "by-account/",
                    identifier: accountID,
                    apiKey: this.apiKey,
                    route: server
                }),
            getSummonerByPuuid: (
                puuid: string,
                server: Route
            ): Promise<SummonerResponse> =>
                SummonerMethods.getSummoner({
                    endpoint: "by-puuid/",
                    identifier: puuid,
                    apiKey: this.apiKey,
                    route: server
                })
        };
    }
    get match() {
        return {
            getMatchesFromPUUID: (
                {
                    identifier: puuid,
                    route: region,
                    start: start,
                    count: count
                }: MatchListQuery
            ): Promise<MatchList> =>
                MatchesMethods.getMatchesList({
                    endpoint: "by-puuid/",
                    identifier: puuid,
                    apiKey: this.apiKey,
                    route: region,
                    start: start,
                    count: count
                }),
            getMatchesFromMatchId: (matchId: string, region: Route): Promise<Match> =>
                MatchesMethods.getMatchFromMatchId({
                    route: region,
                    apiKey: this.apiKey,
                    identifier: matchId
                })
        };
    }
}

export { Route, SummonerResponse };
