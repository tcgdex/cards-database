import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Pikachu"
	},

	illustrator: "James Turner",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		id: "Pikachu memiliki kantong listrik kecil di kedua sisi pipinya. Pokémon ini melepaskan listrik saat terdesak."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Mencari Teman"
			},
			cost: ["Colorless"],
			effect: {
				id: "Pilih 1 lembar Pokémon dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
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
