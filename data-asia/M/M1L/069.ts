import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "マーシャドー",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Shadow Boxing"}, "damage": 60, "cost": ["Fighting", "Fighting"], "effect": {"ja": "If the Defending Pokémon is Knocked Out by damage from this attack, during your opponent's next turn this Pokémon receives no damage or effects from your opponent's Pokémon's attacks"}}],

	weaknesses: [{"type": "Psychic", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [802],
};

export default card;
