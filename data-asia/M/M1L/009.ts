import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ダーテング",
	},

	illustrator: "Uninori",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage2",

	evolveFrom: {
		ja: "コノハナ",
	},

	attacks: [{"name": {"ja": "Gust Return"}, "cost": ["Grass"], "effect": {"ja": "Flip a coin. If heads, pick 1 of your opponent's Pokémon. Your opponent shuffles that Pokémon and all cards attached to it into the deck"}}, {"name": {"ja": "Perplex"}, "damage": 100, "cost": ["Grass", "Colorless"], "effect": {"ja": "Your opponent's Active Pokémon is now Confused"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [275],
};

export default card;
