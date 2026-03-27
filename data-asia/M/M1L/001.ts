import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "フシギダネ",
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ねばるいと"}, "damage": 10, "cost": ["Grass"], "effect": {"ja": "During your opponent's next turn, the Defending Pokémon can't retreat."}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [1],
};

export default card;
