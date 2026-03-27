import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ロコン",
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "なだれ"}, "damage": 10, "cost": ["Colorless"]}, {"name": {"ja": "Combustion"}, "damage": 20, "cost": ["Fire", "Colorless"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [37],
};

export default card;
