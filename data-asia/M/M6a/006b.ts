import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Cherubi"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		id: "Bola Cherubi yang penuh nutrisi merupakan makanan favorit Pokémon burung. Pokémon ini kabur ke sana kemari agar tidak tertepuk."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Bersembunyi"
			},
			cost: ["Colorless"],
			effect: {
				id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan dan efek akibat serangan."
			},
		},
		{
			name: {
				id: "Melompat Berkeliling"
			},
			damage: 10,
			cost: ["Grass"],
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
	dexId: [420],
};

export default card;
