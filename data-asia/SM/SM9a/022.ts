import { Card } from "../../../interfaces";
import Set from "../SM9a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌオー",
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "のんびりとした 性格。 川底で 口を 開けて エサが 飛びこんでくるのを ひたすら 待つ。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "みずでっぽう" },
			damage: 20,
			cost: ["Water"],
		},
		{
			name: { ja: "なみのり" },
			damage: 120,
			cost: ["Water", "Water", "Water"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 558209,
			},
		},
	],

	evolveFrom: {
		ja: "ウパー",
	},

	retreat: 2,
	regulationMark: "C",
	rarity: "Uncommon",
	dexId: [195],
};

export default card;
