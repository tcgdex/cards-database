import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "マニューラ",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ニューラ",
	},

	attacks: [
		{
			name: { ja: "しかえしのつめ" },
			damage: 20,
			cost: ["Darkness", "Darkness"],
			effect: { ja: "" },
		},
		{
			name: { ja: "きりさく" },
			damage: 60,
			cost: ["Darkness", "Darkness"],
		}
	],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [461],
};

export default card;
