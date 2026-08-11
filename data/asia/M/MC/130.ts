import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ニャビー",
	},

	illustrator: "REND",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "暇さえあれば 舐めて 毛づくろい。 お腹に たまった 抜け毛に 火を つけて 炎技を 放つ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "ねこだまし" },
			damage: 10,
			cost: ["Fire"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863426,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [725],
};

export default card;
