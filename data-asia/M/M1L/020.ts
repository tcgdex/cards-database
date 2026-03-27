import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "サンド",
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Dig Claws"}, "damage": 10, "cost": ["Colorless"]}, {"name": {"ja": "Mud-Slap"}, "damage": 20, "cost": ["Fighting", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [27],
};

export default card;
