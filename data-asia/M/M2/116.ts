import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "メガリザードンXex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 360,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "インフェルノX" },
			damage: 90,
			cost: ["Fire", "Fire"],
			effect: { ja: "" },
		}
	],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Mega Hyper Rare",
	dexId: [6],

	suffix: "EX",
};

export default card;
