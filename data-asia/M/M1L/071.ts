import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ミカルゲ",
	},

	illustrator: "IKEDA Saki",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "",
	},

	stage: "Basic",

	abilities: [{"type": "Ability", "name": {"ja": "Vengeful Swirl"}, "effect": {"ja": "Whenever your Active Darkness Pokémon takes damage from an opponent's Pokémon's attack, put 1 damage counter on the attacking Pokémon."}}],

	attacks: [{"name": {"ja": "Top Breaker"}, "damage": 10, "cost": ["Darkness"], "effect": {"ja": "Discard the top card of your opponent's deck."}}],

	weaknesses: [{"type": "Grass", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [442],
};

export default card;
