import { Card } from "models/database/card";
import Set from "../SM5p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "レアコイル",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "ほぼ コイル ３倍の 電力。 太陽の黒点が 多いとき なぜか 大量発生。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ぶつかる" },
			damage: 20,
			cost: ["Lightning"],
		},
		{
			name: { ja: "でんじほう" },
			damage: 80,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンは「でんじほう」が使えない。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [{ type: "Metal", value: "-20" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559764,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "コイル",
	},

	retreat: 2,
	rarity: "None",
	dexId: [82],
};

export default card;
