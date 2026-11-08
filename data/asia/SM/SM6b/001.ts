import { Card } from "models/database/card";
import Set from "../SM6b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マダツボミ",
	},

	illustrator: "Masako Yamashita",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'ja-jp': "人の 顔のような つぼみから 伝説の マンドラゴラの 一種ではないかと ささやかれている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとすいとる" },
			damage: 20,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559151,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [69],
};

export default card;
