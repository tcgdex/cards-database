import { Card } from "../../../interfaces";
import Set from "../M-P";

const card: Card = {
	set: Set,
	name: {
		ja: "シビシラス",
	},

	illustrator: "Saboteri",
	category: "Pokemon",
	hp: 40,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "じっとする" },
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 897859,
			},
		},
	],

	retreat: 0,
	regulationMark: "I",
	rarity: "Promo",
	dexId: [602],
};

export default card;
