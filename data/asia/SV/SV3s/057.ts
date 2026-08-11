import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Toxtricity"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],

	description: {
		'id-id': "Banyak anak muda yang mengagumi gaya Toxtricity yang dengan lesunya tidak takut memprovokasi lawan apa pun."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Memelototi"
		},

		effect: {
			'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		cost: ["Lightning"]
	}, {
		name: {
			'id-id': "Mix Loud"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap tipe Pokémon Cadangan sendiri."
		},

		damage: "50+",
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card