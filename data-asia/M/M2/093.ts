import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "メガヘラクロスex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "パンツァーホーン" },
			damage: 100,
			cost: ["Grass", "Grass"],
			effect: { ja: "" },
		},
		{
			name: { ja: "ミリングジャブ" },
			damage: 170,
			cost: ["Grass", "Grass", "Grass"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Ultra Rare",
	dexId: [214],

	suffix: "EX",
};

export default card;
