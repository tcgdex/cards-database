import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Fuecoco ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [
		{
			name: {
				id: "Menghanguskan"
			},
			cost: ["Fire"],
			effect: {
				id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
			},
		},
		{
			name: {
				id: "Api Gembira"
			},
			damage: "70×",
			cost: ["Fire", "Fire", "Colorless"],
			effect: {
				id: "Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembar Kartu Point yang telah diambil pemain."
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],

	variants: [
		{
			type: "holo",
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Double rare",
	dexId: [909],
};

export default card;
