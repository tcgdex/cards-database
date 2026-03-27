import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ボルケニオン",
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Singe"}, "cost": ["Fire"], "effect": {"ja": "Your opponent's Active Pokémon is now Burned"}}, {"name": {"ja": "Backfire"}, "damage": 130, "cost": ["Fire", "Fire", "Colorless"], "effect": {"ja": "Put 2  Energy attached to this Pokémon back into your hand"}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [721],
};

export default card;
