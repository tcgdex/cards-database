import { Card } from "../../../interfaces";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		ja: "ホエルオーex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 380,
	types: ["Water"],

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "なみのり" },
			damage: 120,
			cost: ["Water", "Water", "Water"],
		},
		{
			name: { ja: "フォーリングダウン" },
			damage: 270,
			cost: ["Water", "Water", "Water", "Water", "Water"],
			effect: {
				ja: "このポケモンをねむりにする。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [{ type: "holo" }],

	evolveFrom: {
		ja: "ホエルコ",
	},

	retreat: 4,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [321],

	suffix: "EX",

	thirdParty: {
		cardmarket: 888252,
	},
};

export default card;
