import { Card } from "../../../interfaces";
import Set from "../M1L";

const card: Card = {
	set: Set,
	name: {
		ja: "ミルタンク",
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		ja: "",
	},

	stage: "Basic",

	attacks: [{"name": {"ja": "Filling Milk"}, "cost": ["Colorless", "Colorless"], "effect": {"ja": "Flip 2 coins. If both are heads, heal all damage from 1 of your Pokémon"}}, {"name": {"ja": "たいあたり"}, "damage": 60, "cost": ["Colorless", "Colorless", "Colorless"]}],

	weaknesses: [{"type": "Fighting", "value": "x2"}],
	resistances: [],

	variants: [{"type": "normal"}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [241],
};

export default card;
