import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Cherrim"
	},

	illustrator: "takashi shiraishi",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	description: {
		id: "Wujud Cherrim yang penuh semangat karena bermandikan cahaya matahari. Pokémon ini aktif hingga matahari tenggelam."
	},

	stage: "Stage1",

	evolveFrom: {
		id: "Cherubi"
	},

	attacks: [
		{
			name: {
				id: "Energy Gift"
			},
			cost: ["Colorless"],
			effect: {
				id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, lalu kenakan sesukanya pada Pokémon sendiri. Kemudian, kocok Deck."
			},
		},
		{
			name: {
				id: "Dedaunan"
			},
			damage: 50,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 1,
	regulationMark: "J",
	rarity: "Common",
	dexId: [421],
};

export default card;
