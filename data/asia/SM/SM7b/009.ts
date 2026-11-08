import { Card } from "models/database/card";
import Set from "../SM7b";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ツチニン",
	},

	illustrator: "SATOSHI NAKAI",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'ja-jp': "１０年以上 土の 中で 暮らす ことも ある。 樹木の 根っこから 栄養を 吸い取る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "みだれひっかき" },
			damage: "10×",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "コインを3回投げ、オモテの数x10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558834,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [290],
};

export default card;
