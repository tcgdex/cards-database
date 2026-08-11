import { Card } from "models/database/card";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "セレビィV",
		'zh-tw': "時拉比V",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "わかばのまい",
				'zh-tw': "斬返",
			},
			cost: ["Grass"],
			effect: {
				'ja-jp': "自分の手札から[草]エネルギーを好きなだけ選び、自分のポケモンに好きなようにつける。",
				'zh-tw': "將這隻寶可夢與備戰寶可夢互換。",
			},
		},
		{
			name: { ja: "スラッシュバック" },
			damage: 60,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンをベンチポケモンと入れ替える。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 560689,
				tcgplayer: 569231,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [251],
};

export default card;
