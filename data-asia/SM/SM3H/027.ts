import { Card } from "../../../interfaces";
import Set from "../SM3H";

const card: Card = {
	set: Set,
	name: {
		ja: "リオル",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "人や ポケモンの 感情や 自然の 様子を 波動 という 波の 形で みているのだ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パンチ" },
			damage: 10,
			cost: ["Fighting"],
		},
		{
			name: { ja: "けたぐり" },
			damage: 30,
			cost: ["Fighting", "Fighting"],
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561091,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [447],
};

export default card;
