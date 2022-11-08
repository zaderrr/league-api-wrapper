"use strict";

import {SummonerMethods, Route, SummonerResponse, MatchesMethods, MatchList} from "./@types/index.js"

export default class LolApi {
  apiKey: string;
  constructor(_apiKey: string) {
    this.apiKey = _apiKey;
  }

  get summoner() {
    return {
      getSummonerBySummonerName: (summonerName:string , server: Route): Promise<SummonerResponse> =>
        SummonerMethods.getSummonerBySummonerName({identifier: summonerName, apiKey: this.apiKey, route: server}),
      getSummonerBySummonerId: (summonerId:string , server: Route): Promise<SummonerResponse> =>
        SummonerMethods.getSummonerBySummonerId({identifier: summonerId, apiKey: this.apiKey, route: server}),
      getSummonerByAccountID: (accountID:string , server: Route): Promise<SummonerResponse> =>
        SummonerMethods.getSummonerByAccountID({identifier: accountID, apiKey: this.apiKey, route: server}),
      getSummonerByPuuid: (puuid:string , server: Route): Promise<SummonerResponse> =>
        SummonerMethods.getSummonerByPuuid({identifier: puuid, apiKey: this.apiKey, route: server}),
    }
  }
  get match() {
    return {
      getMatchesFromPUUID: (puuid:string , region: Route): Promise<MatchList> =>
        MatchesMethods.getMatchesFromPUUID(puuid, region, this.apiKey),
    }
  }

}

export {Route, SummonerResponse}

