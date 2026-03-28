import { Card } from "../../../interfaces";
import Set from "../M4";

const card: Card = {
	set: Set,
	name: {
		ja: "ゴマゾウ",
	},

	illustrator: "Akino Fukuji",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "どろかけ"}, "cost": ["Fighting"], "damage": 10}, {"name": {"ja": "ころがる"}, "cost": ["Colorless", "Colorless", "Colorless"], "damage": 40}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [231],
};

export default card;
