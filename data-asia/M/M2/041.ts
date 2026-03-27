import { Card } from "../../../interfaces";
import Set from "../M2";

const card: Card = {
	set: Set,
	name: {
		ja: "アノホラグサ",
	},

	illustrator: "Tetsu Kayama",
	category: "Pokemon",
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "アノクサ",
	},

	attacks: [
		{
			name: { ja: "サイコスフィア" },
			damage: 80,
			cost: ["Psychic", "Colorless", "Colorless"],
		}
	],

	weaknesses: [{"type": "Darkness", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [947],
};

export default card;
