import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Groudon"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		id: "Setelah pertarungan mematikan dengan Kyogre, Groudon tidur panjang. Pokémon legendaris yang dikenal sebagai Jelmaan Daratan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Kekuatan Bergejolak"
		},

		effect: {
			id: "Pilih 1 lembar Energi Dasar {Petarung} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Magma Purge"
		},

		effect: {
			id: "Buang paling banyak 4 lembar Energi yang dikenakan pada Pokémon di Arena sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 60 untuk tiap lembarnya."
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