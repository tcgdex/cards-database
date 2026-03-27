import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "リオル",
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Accelerating Stab"}, "damage": 30, "cost": ["Fighting"], "effect": {"ja": "During your next turn, this Pokémon can't use Accelerating Stab."}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [447],
};

export default card;
