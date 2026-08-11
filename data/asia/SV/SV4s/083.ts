import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Ting-Lu"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		id: "Ting-Lu adalah, rasa takut yang tertuang pada wadah yang digunakan dalam ritual kuno menyelimuti dirinya dengan tanah dan batu, lalu berubah menjadi Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Sand Bring"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan pada 1 Pokémon sendiri."
		},

		cost: ["Fighting"]
	}, {
		name: {
			id: "Hantaman Kecongkakan"
		},

		effect: {
			id: "Jika Pokémon ini memiliki Token Kerusakan sejumlah 4 atau lebih, serangan ini gagal."
		},

		damage: 220,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card