import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ポニータ",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "親の あとを 追いかけるうちに 強靭な 足腰になる。 １日中 野山を 駆け回る。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "はねまわる" },
			damage: 10,
			cost: ["Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863381,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [77],
};

export default card;
