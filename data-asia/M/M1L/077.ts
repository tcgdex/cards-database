import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "メガバクーダex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 340,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Roasting Heat"}, "damage": "80+", "cost": ["Fire"], "effect": {"ja": "If your opponent's Active Pokémon is Burned, this attack does 160 more damage."}}, {"name": {"ja": "Volcano Meteor"}, "damage": 280, "cost": ["Fire", "Colorless", "Colorless", "Colorless"], "effect": {"ja": "Discard 2 Energy from this Pokémon."}}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "holo"}],

	retreat: 4,
	regulationMark: "I",
	rarity: "Special illustration rare",
	dexId: [323],
	suffix: "EX",
};

export default card;
