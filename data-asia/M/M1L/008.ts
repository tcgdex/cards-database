import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "コノハナ",
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "タネボー",
	},

	attacks: [{"name": {"ja": "はたく"}, "damage": 30, "cost": ["Grass"]}, {"name": {"ja": "あしばらい"}, "damage": 50, "cost": ["Grass", "Colorless"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [274],
};

export default card;
