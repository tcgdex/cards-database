import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "マッスグマ",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "ジグザグマ",
	},

	attacks: [
		{
			name: { ja: "きりさく" },
			damage: 70,
			cost: ["Colorless"],
		}
	],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [264],
};

export default card;
