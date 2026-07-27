import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
		'zh-tw': "噴火龍V",
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "つくる 電気が 強力な ピカチュウほど ほっぺの 袋は 軟らかく よく 伸びるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "しっぽをふる",
				'zh-tw': "燒盡",
			},
			cost: ["Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、次の相手の番、このワザを受けたポケモンは、ワザが使えない。",
				'zh-tw': "在造成傷害前，將對手的戰鬥寶可夢身上附加的「寶可夢道具」丟棄。",
			},
		},
		{
			name: {
				ja: "ピカボルト",
				'zh-tw': "高溫爆破",
			},
			damage: 50,
			cost: ["Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525345,
				tcgplayer: 597333,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
