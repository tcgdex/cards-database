import { Card } from "models/database/card";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ニャオハex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ひっかく" },
			damage: 20,
			cost: ["Colorless"],
		},
		{
			name: { ja: "マジカルリーフ" },
			damage: 100,
			cost: ["Grass", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 864059,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [906],

	suffix: "EX",
};

export default card;
