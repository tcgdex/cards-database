import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウex",
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 200,
	types: ["Lightning"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "10まんボルト" },
			damage: 120,
			cost: ["Lightning", "Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863523,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [25],

	suffix: "EX",
};

export default card;
