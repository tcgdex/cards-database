import { Card } from "models/database/card";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "サダイジャV",
		'zh-tw': "阿羅拉 椰蛋樹V",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: { ja: "すなのぼうへき" },
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-30」される。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ランドクラッシュ",
				'zh-tw': "悠悠成長",
			},
			damage: 140,
			cost: ["Fighting", "Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561783,
				tcgplayer: 597372,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Promo",
	dexId: [844],
};

export default card;
