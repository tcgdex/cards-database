import { Card } from "../../../interfaces";
import Set from "../S11a";

const card: Card = {
	set: Set,
	name: {
		ja: "ジャローダV",
		'zh-tw': "君主蛇V",
	},

	illustrator: "Ayaka Yoshida",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "けだかいひかり",
				'zh-tw': "高貴之光",
			},
			cost: ["Colorless"],
			effect: {
				ja: "おたがいのポケモン全員のHPを、それぞれ「30」回復する。",
				'zh-tw': "將雙方的所有寶可夢各恢復「30」HP。",
			},
		},
		{
			name: {
				ja: "ソーラービーム",
				'zh-tw': "日光束",
			},
			damage: 120,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 673002,
				tcgplayer: 570768,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [497],
};

export default card;
