import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "マクノシタ",
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Corkscrew Punch"}, "damage": 10, "cost": ["Fighting"]}, {"name": {"ja": "Confront"}, "damage": 30, "cost": ["Fighting", "Fighting"]}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [296],
};

export default card;
