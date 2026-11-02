import { Card } from "../../../interfaces";
import Set from "../SM2K";

const card: Card = {
	set: Set,
	name: {
		ja: "チュリネ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "頭の葉っぱは めまいが するほど 苦いが 疲れた 身体に 効く。 煎じて 飲めば もっと 効く。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ちょっとすいとる" },
			damage: 10,
			cost: ["Colorless"],
			effect: {
				ja: "このポケモンのHPを「10」回復する。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 561470,
			},
		},
	],

	retreat: 1,
	rarity: "Common",
	dexId: [548],
};

export default card;
