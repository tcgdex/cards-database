import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "シルシュルー",
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Poison Jab"}, "damage": 20, "cost": ["Darkness", "Colorless"], "effect": {"ja": "Your opponent's Active Pokémon is now Poisoned."}}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [944],
};

export default card;
