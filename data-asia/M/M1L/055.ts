import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤングース",
	},

	illustrator: "Mekayu",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Collect"}, "cost": ["Colorless"], "effect": {"ja": "Draw a card"}}, {"name": {"ja": "Gnaw"}, "damage": 20, "cost": ["Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [734],
};

export default card;
