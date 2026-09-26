import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Pikachu"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		id: "Pikachu memiliki kantong listrik kecil di kedua sisi pipinya. Pokémon ini melepaskan listrik saat terdesak."
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				id: "Pandangan Mata Kesepian"
			},
			effect: {
				id: "Selama Pokémon ini ada di Arena Bertarung, kerusakan akibat serangan yang digunakan oleh Pokémon Bertarung lawan berkurang sejumlah 20."
			},
		},
	],

	attacks: [
		{
			name: {
				id: "Bola Pika"
			},
			damage: 20,
			cost: ["Lightning", "Colorless"],
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
