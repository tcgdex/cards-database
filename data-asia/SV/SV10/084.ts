import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "スバメ",
		'zh-tw': "傲骨燕",
		'zh-cn': "傲骨燕",
	},

	illustrator: "Ayako Ozaki",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "寒い 季節は 苦手。暖かい 土地を 探し １日 ３００キロの 距離を 飛んで 移動する。",
		'zh-tw': "不擅長應付寒冷的季節。 為了尋找溫暖的地帶， 會１天飛上３００公里的距離。",
		'zh-cn': "不擅長應付寒冷的季節。 為了尋找溫暖的地帶， 會１天飛上３００公里的距離。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つばさでうつ",
				'zh-tw': "翅膀攻擊",
				'zh-cn': "翅膀攻擊",
			},
			damage: 20,
			cost: ["Colorless"],
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821916,
				tcgplayer: 628725,
			},
		},
	],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [276],
};

export default card;
