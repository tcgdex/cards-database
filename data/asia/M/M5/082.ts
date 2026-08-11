import { Card } from "models/database/card";
import Set from "../M5";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カリキリ",
	},

	illustrator: "Jiro Sasuno",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "とつげき" },
			damage: 30,
			cost: ["Grass"],
			effect: {
				'ja-jp': "このポケモンにも10ダメージ。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 888627,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Illustration rare",
	dexId: [753],
};

export default card;
