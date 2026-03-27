import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ナッシー",
	},

	illustrator: "Kazumasu Yasukuni",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "",
	},

	stage: "Stage1",

	evolveFrom: {
		ja: "タマタマ",
	},

	attacks: [{"name": {"ja": "Guard Press"}, "damage": 30, "cost": ["Grass"], "effect": {"ja": "During your next turn, this Pokémon receives 30 less damage from attacks (after applying Weakness and Resistance)"}}, {"name": {"ja": "Wood Stamp"}, "damage": "60+", "cost": ["Colorless", "Colorless", "Colorless"], "effect": {"ja": "This attack does 30 more damage for each  Energy attached to this Pokémon"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [103],
};

export default card;
