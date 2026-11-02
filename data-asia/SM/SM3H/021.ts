import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "ソーナンス",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "光や ショックを 嫌う。 攻撃されると 体が ふくらみ 反撃が 強力に なる。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "かげむすび" },
			damage: "50×",
			cost: ["Psychic", "Psychic", "Psychic"],
			effect: {
				ja: "相手のバトルポケモンのにげるためのエネルギーの数x50ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561085,
			},
		},
	],

	retreat: 3,
	rarity: "Uncommon",
	dexId: [202],
};

export default card;
