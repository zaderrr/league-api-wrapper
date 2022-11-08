import fetch from "node-fetch";

export enum Route {
  BR =	"br",
  EUNE =	"eun1",
  EUW =	"euw1",
  JP =	"jp1",
  KR =	"kr",
  LATAN =	"la1",
  LATAS =	"la2",
  NA =	"na1",
  OC =	"oc1",
  TR =	"tr1",
  RU =	"ru",
  AMERICAS = "americas",
  ASIA = "asia",
  EUROPE= "europe",
  SEA = "sea",
}

export type MatchList = {
  matches: string[];
}

export type MatchListQuery = {
  startTime: number;
  endTime: number;
  queue: number;
  type: string;
  start: number;
  count: number;
}

export type ApiQueryParams = {
  route: Route;
  apiKey: string;
}

export interface SummonerQuery extends ApiQueryParams {
  identifier: string;

}
export type SummonerResponse = {
  accountId : string;
  profileIconId :	number	
  revisionDate	: number;
  name: string;
  id	: string;
  puuid	: string;
  summonerLevel	: number;  
}

export namespace SummonerMethods {
  let base: string  = "lol/summoner/v4/summoners/";
  export async function getSummonerBySummonerName (queryParams: SummonerQuery): Promise<SummonerResponse>{
    base += `by-name/${queryParams.identifier}?api_key=${queryParams.apiKey}`;
    return Methods.getSummoner(base, queryParams.route)
  }
  export async function getSummonerBySummonerId (queryParams: SummonerQuery): Promise<SummonerResponse>{
    base += `${queryParams.identifier}?api_key=${queryParams.apiKey}`;
    return Methods.getSummoner(base, queryParams.route)
  }
  export async function getSummonerByAccountID (queryParams: SummonerQuery): Promise<SummonerResponse>{
    base += `by-account/${queryParams.identifier}?api_key=${queryParams.apiKey}`;
    return Methods.getSummoner(base, queryParams.route)
  }
  export async function getSummonerByPuuid (queryParams: SummonerQuery): Promise<SummonerResponse>{
    base += `by-puuid/${queryParams.identifier}?api_key=${queryParams.apiKey}`;
    return Methods.getSummoner(base, queryParams.route)
  }
}

export namespace MatchesMethods {
  let base: string  = "lol/match/v5/matches/";
  export async function getMatchesFromPUUID (puuid: string, region: Route, apiKey: string): Promise<MatchList>{
    base += `by-puuid/${puuid}/ids?api_key=${apiKey}`
    return Methods.Request(base,region)
  }
}


namespace Methods {
  
  export async function getSummoner(base: string, route: Route): Promise<SummonerResponse>{
    return Request<SummonerResponse>(base,route);
  }
  export async function getMatches(base: string, route: Route): Promise<MatchList>{
    return Request<MatchList>(base,route);
  }
  
  export async function Request<T>(url: string, route:Route) {
    return fetch(`https://${route}.api.riotgames.com/${url}`).then(response => {
    if (!response.ok) {
      throw new Error(`https://${route}.api.riotgames.com/${url}`);
    }
    return response.json() as Promise<T>
  })
}
}