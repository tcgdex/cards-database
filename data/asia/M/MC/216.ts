import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イルカマンex",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 340,
	types: ["Water"],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: { ja: "マイティソウル" },
			effect: {
				'ja-jp': "このカードは、「イルカマン」の特性「マイティチェンジ」の効果によってしか場に出せない。",
			},
		},
	],

	attacks: [
		{
			name: { ja: "ギガインパクト" },
			damage: 250,
			cost: ["Water"],
			effect: {
				'ja-jp': "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863512,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ナミイルカ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [964],

	suffix: "EX",
};

export default card;
