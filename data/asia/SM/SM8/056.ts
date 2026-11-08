import { Card } from "models/database/card";
import Set from "../SM8";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アローラニャース",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'ja-jp': "高いプライドを 傷つけられたり 額の 小判を 汚されると 狂ったような ヒステリーを 起こす。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でばなをくじく" },
			damage: "10+",
			cost: [],
			effect: {
				'ja-jp': "後攻プレイヤーの最初の番なら、60ダメージ追加。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Psychic", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558695,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [52],
};

export default card;
