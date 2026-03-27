import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギソウ",
	},

	illustrator: "mashu",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "フシギダネ",
	},

	attacks: [{"name": {"ja": "はっぱカッター"}, "damage": 60, "cost": ["Grass", "Grass"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 3,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [2],
};

export default card;
