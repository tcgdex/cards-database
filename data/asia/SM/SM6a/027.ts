import { Card } from "models/database/card";
import Set from "../SM6a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ハクリュー",
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		'ja-jp': "天候を 司る 者として 太古から 農業を 営む 人々に 崇められてきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ドラゴンテール" },
			damage: "60×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを2回投げ、オモテの数x60ダメージ。",
			},
		},
		{
			name: { ja: "たきのぼり" },
			damage: 80,
			cost: ["Water", "Lightning", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fairy", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 559293,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ミニリュウ",
	},

	retreat: 2,
	rarity: "Common",
	dexId: [148],
};

export default card;
