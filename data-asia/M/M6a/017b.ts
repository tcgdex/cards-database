import { Card } from "../../../interfaces";
import Set from "../M6a";

const card: Card = {
	set: Set,
	name: {
		id: "Lapras"
	},

	illustrator: "Masa",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		id: "Ia memiliki kecerdasan tinggi dan mengerti bahasa manusia. Pokémon yang suka menaikkan manusia di punggungnya dan berenang di lautan."
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				id: "Naikkan dan Berenang"
			},
			cost: ["Colorless"],
			effect: {
				id: "Pilih 1 lembar Supporter dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
			},
		},
		{
			name: {
				id: "Sinar Pembeku"
			},
			damage: 80,
			cost: ["Water", "Colorless", "Colorless"],
			effect: {
				id: "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],

	variants: [
		{
			type: "normal",
		},
	],

	retreat: 2,
	regulationMark: "J",
	rarity: "Common",
	dexId: [131],
};

export default card;
