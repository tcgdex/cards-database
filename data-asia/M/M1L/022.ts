import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "イワーク",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "しめつける"}, "damage": 30, "cost": ["Colorless", "Colorless"], "effect": {"ja": "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed"}}, {"name": {"ja": "Strength"}, "damage": 100, "cost": ["Colorless", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Common",
	dexId: [95],
};

export default card;
