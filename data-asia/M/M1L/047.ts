import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ディアルガ",
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Beam"}, "damage": 30, "cost": ["Metal"]}, {"name": {"ja": "Chrono Burst"}, "damage": "80+", "cost": ["Metal", "Metal", "Colorless"], "effect": {"ja": "You may discard this Pokémon and shuffle all Energy attached to it into your deck. If you do, this attack does 80 more damage"}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [483],
};

export default card;
