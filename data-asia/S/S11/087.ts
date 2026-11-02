import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミロル",
		'zh-tw': "捲捲耳",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "左右の 耳を 丸めているときは 体や 心の 不調が 原因なので ケアが 必要。",
		'zh-tw': "將左右兩耳都捲起來時，就代表牠的身體或心情 狀況不佳，需要照顧。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はねてみる",
				'zh-tw': "試跳",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げウラなら、このワザは失敗。",
				'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667962,
				tcgplayer: 570018,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Common",
	dexId: [427],
};

export default card;
