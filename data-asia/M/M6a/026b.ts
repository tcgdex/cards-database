import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Pikachu"
	},

	illustrator: "Takeshi Nakamura",
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
				id: "Mengintip"
			},
			cost: ["Colorless"],
			effect: {
				id: "Lihat Kartu Pegangan lawan."
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Pikachu Rare",
	dexId: [25],
};

export default card;
