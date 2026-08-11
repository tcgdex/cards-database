import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Groudon"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'id-id': "Setelah pertarungan mematikan dengan Kyogre, Groudon tidur panjang. Pokémon legendaris yang dikenal sebagai Jelmaan Daratan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Kekuatan Bergejolak"
		},

		effect: {
			'id-id': "Pilih 1 lembar Energi Dasar {Petarung} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Magma Purge"
		},

		effect: {
			'id-id': "Buang paling banyak 4 lembar Energi yang dikenakan pada Pokémon di Arena sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembarnya."
		},

		damage: "60×",
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card