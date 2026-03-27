import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガクチートex",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Gobble Down"}, "damage": "80x", "cost": ["Metal", "Metal"], "effect": {"ja": "This attack does 80 damage for each prize card you've already taken."}}, {"name": {"ja": "Big Bite"}, "damage": 260, "cost": ["Metal", "Metal", "Colorless"], "effect": {"ja": "If your opponent's Active Pokémon already has any damage s on it, this attack does 30 damage instead."}}],

	weaknesses: [{"type": "Fire", "value": "x2"}],
	resistances: [{"type": "Grass", "value": "-30"}],

	variants: [{"type": "holo"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Double rare",
	dexId: [303],
	suffix: "EX",
};

export default card;
