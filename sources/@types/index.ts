import fetch from "node-fetch";

export enum Route {
  BR = "br",
  EUNE = "eun1",
  EUW = "euw1",
  JP = "jp1",
  KR = "kr",
  LATAN = "la1",
  LATAS = "la2",
  NA = "na1",
  OC = "oc1",
  TR = "tr1",
  RU = "ru",
  AMERICAS = "americas",
  ASIA = "asia",
  EUROPE = "europe",
  SEA = "sea"
}

export type MatchList = {
  matches: string[];
};
export type ApiQueryParams = {
  route: Route;
  apiKey: string;
  endpoint?: string;
  identifier: string;
};
export interface MatchListQuery extends ApiQueryParams {
  startTime?: number;
  endTime?: number;
  queue?: number;
  type?: string;
  start?: number;
  count?: number;
}

export type Match = {
  metadata: Metadata;
  info: Info;
};

type Metadata = {
  dataVersion: string;
  matchId: string;
  participants: string[];
};

type Info = {
  gameCreation: number;
  gameDuration: number;
  gameEndTimestamp: number;
  gameId: number;
  gameMode: string;
  gameName: string;
  gameStartTimestamp: number;
  gameType: string;
  gameVersion: string;
  mapId: number;
  participants:	Participant[],
  platformId: string;
  queueId: number;
  teams:	Team[],
  tournamentCode: string;
};

type Participant = {
  assists:	number,	
  baronKills:	number,	
  bountyLevel:	number,	
  champExperience:	number,	
  champLevel:	number,	
  championId:	number,	
  championName: string,	
  championTransform:	number,	
  consumablesPurchased:	number,	
  damageDealtToBuildings:	number,	
  damageDealtToObjectives:	number,	
  damageDealtToTurrets:	number,	
  damageSelfMitigated:	number,	
  deaths:	number,	
  detectorWardsPlaced:	number,	
  doubleKills:	number,	
  dragonKills:	number,	
  firstBloodAssist:	boolean,	
  firstBloodKill:	boolean,	
  firstTowerAssist:	boolean,	
  firstTowerKill:	boolean,	
  gameEndedInEarlySurrender:	boolean,	
  gameEndedInSurrender:	boolean,	
  goldEarned:	number,	
  goldSpent:	number,	
  individualPosition:	string,	
  inhibitorKills:	number,	
  inhibitorTakedowns:	number,	
  inhibitorsLost:	number,	
  item0:	number,	
  item1:	number,	
  item2:	number,	
  item3:	number,	
  item4:	number,	
  item5:	number,	
  item6:	number,	
  itemsPurchased:	number,	
  killingSprees:	number,	
  kills:	number,	
  lane:	string,	
  largestCriticalStrike:	number,	
  largestKillingSpree:	number,	
  largestMultiKill:	number,	
  longestTimeSpentLiving:	number,	
  magicDamageDealt:	number,	
  magicDamageDealtToChampions:	number,	
  magicDamageTaken:	number,	
  neutralMinionsKilled:	number,	
  nexusKills:	number,	
  nexusTakedowns:	number,	
  nexusLost:	number,	
  objectivesStolen:	number,	
  objectivesStolenAssists:	number,	
  participantId:	number,	
  pentaKills:	number,	
  perks:	Perks,	
  physicalDamageDealt:	number,	
  physicalDamageDealtToChampions:	number,	
  physicalDamageTaken:	number,	
  profileIcon:	number,	
  puuid:	string,	
  quadraKills:	number,	
  riotIdName:	string,	
  riotIdTagline:	string,	
  role:	string,	
  sightWardsBoughtInGame:	number,	
  spell1Casts:	number,	
  spell2Casts:	number,	
  spell3Casts:	number,	
  spell4Casts:	number,	
  summoner1Casts:	number,	
  summoner1Id:	number,	
  summoner2Casts:	number,	
  summoner2Id:	number,	
  summonerId:	string,	
  summonerLevel:	number,	
  summonerName:	string,	
  teamEarlySurrendered:	boolean,	
  teamId:	number,	
  teamPosition:	string,	
  timeCCingOthers:	number,	
  timePlayed:	number,	
  totalDamageDealt:	number,	
  totalDamageDealtToChampions:	number,	
  totalDamageShieldedOnTeammates:	number,	
  totalDamageTaken:	number,	
  totalHeal:	number,	
  totalHealsOnTeammates:	number,	
  totalMinionsKilled:	number,	
  totalTimeCCDealt:	number,	
  totalTimeSpentDead:	number,	
  totalUnitsHealed:	number,	
  tripleKills:	number,	
  trueDamageDealt:	number,	
  trueDamageDealtToChampions:	number,	
  trueDamageTaken:	number,	
  turretKills:	number,	
  turretTakedowns:	number,	
  turretsLost:	number,	
  unrealKills:	number,	
  visionScore:	number,	
  visionWardsBoughtInGame:	number,	
  wardsKilled:	number,	
  wardsPlaced:	number,	
  win:	boolean,	
}
type Perks= {
  statPerks:	PerkStats,
  styles:	PerkStyle[]
}
type PerkStats = {
  defense: number,	
  flex: number,
  offense: number
}
type PerkStyle={
  description:	string,
  selections: PerkStyleSelection,
  style: number
}

type PerkStyleSelection = {
  perk: number,
  var1: number,	
  var2: number,	
  var3: number
}

type Team = {
  bans:	Ban[],
  objectives:	Objectives,
  teamId:	number,
  win:	boolean,
}

type Objectives = {
  baron:	Objective,
  champion:	Objective,	
  dragon:	Objective,	
  inhibitor:	Objective,	
  riftHerald:	Objective,	
  tower:	Objective,
}

type Objective = {
  first: boolean,
  kills: number
}

type Ban = {
  championId: number,	
  pickTurn: number
}

export type SummonerResponse = {
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  name: string;
  id: string;
  puuid: string;
  summonerLevel: number;
};

export namespace SummonerMethods {
  export async function getSummoner(
    queryParams: ApiQueryParams
    ): Promise<SummonerResponse> {
      const base = `lol/summoner/v4/summoners/${queryParams.endpoint}${queryParams.identifier}?api_key=${queryParams.apiKey}`;
      return Methods.Request<SummonerResponse>(base, queryParams.route);
    }
  }
  
  export namespace MatchesMethods {
    export async function getMatchesList(
      queryParams: MatchListQuery
      ): Promise<MatchList> {
        let query: string = "&";
        if (queryParams.count !== undefined){
          query += `&count=${queryParams.count}`
        }
        if (queryParams.start !== undefined){
          query += `&start=${queryParams.start}`
        }
        const base = `lol/match/v5/matches/${queryParams.endpoint}${queryParams.identifier}/ids?api_key=${queryParams.apiKey}${query}`;
        return Methods.Request<MatchList>(base, queryParams.route);
      }
      export async function getMatchFromMatchId(
        queryParams: ApiQueryParams
        ): Promise<Match> {
          const base = `lol/match/v5/matches/${queryParams.identifier}?api_key=${queryParams.apiKey}`;
          return Methods.Request<Match>(base, queryParams.route);
        }
      }
      
      namespace Methods {
        export async function Request<T>(url: string, route: Route) {
          return fetch(`https://${route}.api.riotgames.com/${url}`).then(
          (response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json() as Promise<T>;
          }
          );
        }
      }
      