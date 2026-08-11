import { Card } from "../../../interfaces";
import Set from "../MC";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼブライカ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "雷鳴を 聞くと 群れの シママが 雷から 充電できるように 群れで 雷雲を 追いかける。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: { ja: "キック" },
			damage: 30,
			cost: ["Lightning"],
		},
		{
			name: { ja: "マッハボルト" },
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
				cardmarket: 863547,
			},
		},
	],

	evolveFrom: {
		ja: "シママ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "None",
	dexId: [523],
};

export default card;
