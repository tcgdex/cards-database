import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ドンメル",
	},

	illustrator: "Wintr Wandr",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Call for Family"}, "cost": ["Fire"], "effect": {"ja": "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck."}}, {"name": {"ja": "Flare"}, "damage": 30, "cost": ["Fire", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Water", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [322],
};

export default card;
