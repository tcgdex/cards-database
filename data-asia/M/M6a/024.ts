import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "ほっぺたの 両側に 小さい 電気袋を 持つ。 ピンチのときに 放電する。",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "マッハボルト" },
			damage: 30,
			cost: ["Lightning"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 908202,
			},
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "None",
	dexId: [25],
};

export default card;
