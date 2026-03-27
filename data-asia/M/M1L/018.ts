import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ヘイガニ",
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Irongrip"}, "damage": 10, "cost": ["Colorless"]}, {"name": {"ja": "とっしん"}, "damage": 30, "cost": ["Colorless", "Colorless"], "effect": {"ja": "This Pokémon also does 10 damage to itself"}}],

	weaknesses: [{"type": "Electric", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [341],
};

export default card;
