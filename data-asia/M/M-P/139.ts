import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "メガシャリタツex",
	},

	illustrator: "Keisuke Azuma",
	category: "Pokemon",
	hp: 260,
	types: ["Water"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "サンカンヘッド" },
			damage: "150×",
			cost: ["Water", "Water", "Water"],
			effect: {
				ja: "コインを3回投げ、オモテの数×150ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 897858,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Promo",
	dexId: [978],

	suffix: "EX",
};

export default card;
