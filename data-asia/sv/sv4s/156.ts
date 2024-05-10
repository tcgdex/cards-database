import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Jugulis"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	description: {
		id: "Kemungkinan Pokémon ini adalah objek bernama Iron Jugulis yang tertera dalam buku kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Homing Head"
		},

		effect: {
			id: "Serangan ini memberikan kerusakan masing-masing sejumlah 50 kepada 3 Pokémon lawan yang memiliki Token Kerusakan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			id: "Baryon Beam"
		},

		effect: {
			id: "Jika Pokémon ini mengenakan Pemacu Energi Futur, serangan ini dapat digunakan dengan 3 Energi {Bening}."
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card