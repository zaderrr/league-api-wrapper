"use strict";
import fetch from "node-fetch";

export enum Region {
  BR =	"br1.api.riotgames.com",
  EUNE =	"eun1.api.riotgames.com",
  EUW =	"euw1.api.riotgames.com",
  JP =	"jp1.api.riotgames.com",
  KR =	"kr.api.riotgames.com",
  LATAN =	"la1.api.riotgames.com",
  LATAS =	"la2.api.riotgames.com",
  NA =	"na1.api.riotgames.com",
  OC =	"oc1.api.riotgames.com",
  TR =	"tr1.api.riotgames.com",
  RU =	"ru.api.riotgames.com",
}

export default class LolApi {
    apiKey: string;
   
    constructor(_apiKey: string) {
      this.apiKey = _apiKey;
    }

    async getSummonerBySummonerName (summonerName: string, region: Region): Promise<unknown>{
        const res = await fetch(`https://${region}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${this.apiKey}`);
        const body = await res.json();
        return body 
    }

}