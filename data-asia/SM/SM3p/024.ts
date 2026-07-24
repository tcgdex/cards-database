import { Card } from "../../../interfaces";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		ja: "フローゼル",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "発達した 浮き袋で 浮かぶ。 おぼれた 人を 救助する 手伝いを している ポケモンだ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひれカッター" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "アクアボム" },
			damage: 120,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも30ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560182,
			},
		},
	],

	evolveFrom: {
		ja: "ブイゼル",
	},

	retreat: 1,
	rarity: "Uncommon",
	dexId: [419],
};

export default card;
