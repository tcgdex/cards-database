import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ハブネーク",
	},

	illustrator: "hncl",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [
		{
			name: { ja: "まっくろのきば" },
			damage: 120,
			cost: ["Darkness", "Darkness", "Darkness"],
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [336],
};

export default card;
