import { Card } from "models/database/card";
import Set from "../SM3p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "コータス",
	},

	illustrator: "Suwama Chiaki",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		'ja-jp': "石炭が エネルギーの 源。 コータスの 棲んでいる 山には 多くの 石炭が 眠っている。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "こうあつねつ" },
			damage: 30,
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンの「こうあつねつ」のダメージは「+50」される。",
			},
		},
		{
			name: { ja: "かえんほうしゃ" },
			damage: 90,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、1個トラッシュする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560170,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [324],
};

export default card;
