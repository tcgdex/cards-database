import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ミライドン",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	description: {
		ja: "古い 書物に 名が ある テツノオロチらしい。 雷で 大地を 灰に 変えたという。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "でんきのツメ" },
			damage: 30,
			cost: ["Lightning"],
		},
		{
			name: { ja: "マッハボルト" },
			damage: 60,
			cost: ["Lightning", "Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 863579,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [1008],
};

export default card;
