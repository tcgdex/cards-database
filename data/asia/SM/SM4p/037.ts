import { Card } from "models/database/card";
import Set from "../SM4p";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ソーナンス",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		'ja-jp': "光や ショックを 嫌う。 攻撃されると 体が ふくらみ 反撃が 強力に なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かげむすび" },
			damage: "50×",
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				'ja-jp': "相手のバトルポケモンのにげるためのエネルギーの数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560070,
			},
		},
	],

	retreat: 3,
	rarity: "None",
	dexId: [202],
};

export default card;
