import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Pikachu"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	description: {
		id: "Pikachu memiliki kantong listrik kecil di kedua sisi pipinya. Pokémon ini melepaskan listrik saat terdesak."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Tidur Sejenak"
			},
			cost: ["Colorless"],
			effect: {
				id: "Pulihkan HP Pokémon ini sejumlah 30."
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 3,
	regulationMark: "J",
	rarity: "Pikachu Rare",
	dexId: [25],
};

export default card;
