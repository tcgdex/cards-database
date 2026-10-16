import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Ho-Oh"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	description: {
		id: "Pokémon yang terdapat pada mitos dengan kisah tubuhnya bersinar tujuh warna dan pelangi terbentuk setelah ia terbang."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Napas Suci"
			},
			cost: ["Fire", "Fire"],
			effect: {
				id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash. Pulihkan HP 1 Pokémon Cadangan sendiri sepenuhnya."
			},
		},
		{
			name: {
				id: "Sayap Api"
			},
			damage: 100,
			cost: ["Fire", "Fire", "Fire"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Rare",
	dexId: [250],
};

export default card;
