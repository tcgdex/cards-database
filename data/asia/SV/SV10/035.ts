import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のモココ",
		'zh-tw': "<火箭隊的>茸茸羊",
		'zh-cn': "<火箭隊的>茸茸羊",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "電気を 蓄えすぎた 結果 体の 表面に 産毛すら 生えない 部分が できてしまった。",
		'zh-tw': "儲存了過多電力的結果， 造成牠身體表面有些部分 連胎毛都長不出來。",
		'zh-cn': "儲存了過多電力的結果， 造成牠身體表面有些部分 連胎毛都長不出來。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "でんきショック",
				'zh-tw': "電擊",
				'zh-cn': "電擊",
			},
			damage: 50,
			cost: ["Lightning", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
				'zh-cn': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821867,
				tcgplayer: 628676,
			},
		},
	],

	evolveFrom: {
		ja: "ロケット団のメリープ",
	},

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [180],
};

export default card;
