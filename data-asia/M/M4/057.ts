import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ダンバル",
	},

	illustrator: "toi8",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ずつき"}, "cost": ["Metal"], "damage": 10}, {"name": {"ja": "ビーム"}, "cost": ["Metal", "Colorless"], "damage": 20}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [374],
};

export default card;
