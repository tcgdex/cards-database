import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "セレビィ",
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Time Walk"}, "cost": ["Grass"], "effect": {"ja": "Search your deck for up to 3 in any combination of  Pokémon or Stadium cards, reveal them, and put them in your hand. Then, shuffle your deck"}}, {"name": {"ja": "Solar Cutter"}, "damage": 30, "cost": ["Grass"]}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [251],
};

export default card;
