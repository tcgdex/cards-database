import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "カプ・ブルル",
		'zh-tw': "卡璞・哞哞",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "大木を 引き抜き ブンブン 振り回す。 草木を 茂らせて そのエネルギーを 吸収する。",
		'zh-tw': "拔出巨大的樹木，轟轟地來回揮舞。 會讓草木茂盛生長，再吸收其中的能量。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ウッドハンマー",
				'zh-tw': "木槌",
			},
			damage: 220,
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
				'zh-tw': "這隻寶可夢也受到30點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 773755,
				tcgplayer: 566257,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [787],
};

export default card;
