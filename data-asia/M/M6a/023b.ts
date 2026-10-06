import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Pikachu"
	},

	illustrator: "Ken Sugimori",
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
				id: "Sengatan Listrik"
			},
			damage: 20,
			cost: ["Lightning", "Colorless"],
			effect: {
				id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
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
