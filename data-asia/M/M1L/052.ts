import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "オニスズメ",
	},

	illustrator: "Scav",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "ついばむ"}, "damage": 10, "cost": ["Colorless"], "effect": {"ja": "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."}}],

	weaknesses: [{"type": "Electric", "value": "x2"}],
	resistances: [{"type": "Fighting", "value": "-30"}],

	variants: [{"type": "normal"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [21],
};

export default card;
