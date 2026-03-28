import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ヌメイル",
	},

	illustrator: "",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	attacks: [{"name": {"ja": "ひっぱたく"}, "cost": ["Water", "Psychic"], "damage": 70}],

	weaknesses: [],
	resistances: [],

	variants: [{"type": "holo"}],

	evolveFrom: {
		ja: "ヌメラ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [705],
};

export default card;
