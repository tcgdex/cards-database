import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "ワルビル",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "メグロコ",
	},

	attacks: [
		{
			name: { ja: "かみつく" },
			damage: 30,
			cost: ["Darkness"],
		},
		{
			name: { ja: "にらみつける" },
			damage: 60,
			cost: ["Darkness", "Colorless", "Colorless"],
		}
	],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [552],
};

export default card;
