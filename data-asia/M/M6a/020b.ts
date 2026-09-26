import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Palkia"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		id: "Dikatakan bahwa Palkia hidup di celah dimensi paralel. Pokémon yang muncul dalam mitologi."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Wormhole"
			},
			damage: 100,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				id: "Tukar Pokémon ini dengan Pokémon Cadangan. Setelah itu, lawan menukar Pokémon Bertarungnya dengan Pokémon Cadangan."
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [484],
};

export default card;
