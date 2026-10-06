import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Pikachu"
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		id: "Pikachu memiliki kantong listrik kecil di kedua sisi pipinya. Pokémon ini melepaskan listrik saat terdesak."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Volt Tackle"
			},
			damage: 80,
			cost: ["Lightning", "Colorless", "Colorless"],
			effect: {
				id: "Pokémon ini juga menerima kerusakan sejumlah 30."
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Pikachu Rare",
	dexId: [25],
};

export default card;
