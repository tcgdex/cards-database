import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ダークライex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: { ja: "やみのかぜ" },
			damage: 40,
			cost: ["Darkness", "Colorless"],
		},
		{
			name: { ja: "ナイトインパクト" },
			damage: 110,
			cost: ["Darkness", "Darkness", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863758,
			},
		},
	],

	retreat: 2,
	regulationMark: "H",
	rarity: "None",
	dexId: [491],

	suffix: "EX",
};

export default card;
