import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビアル",
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "ワルビル",
	},

	attacks: [
		{
			name: { ja: "しかえしのきば" },
			damage: 60,
			cost: ["Darkness"],
			effect: { ja: "" },
		},
		{
			name: { ja: "ハンマーイン" },
			damage: 160,
			cost: ["Darkness", "Colorless", "Colorless", "Colorless"],
		}
	],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [553],
};

export default card;
