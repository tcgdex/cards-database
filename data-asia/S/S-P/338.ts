import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ウインディ",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "一昼夜で １００００キロの 距離を 駆けぬける 姿は 多くの 人を 魅了してきた。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "ひだまりタックル" },
			damage: 160,
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 681794,
				tcgplayer: 597503,
			},
		},
	],

	evolveFrom: {
		ja: "ガーディ",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Promo",
	dexId: [59],
};

export default card;
