import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Zekrom"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		id: "Zekrom membuat listrik menggunakan ekornya. Pokémon ini menyembunyikan seluruh tubuhnya di awan petir dan terbang di langit Daerah Unova."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Crush Short"
		},

		effect: {
			id: "Sebelum memberikan kerusakan, buang Pokémon Tool yang dikenakan pada Pokémon Bertarung lawan ke Trash."
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Sambaran Petir"
		},

		effect: {
			id: "Serangan ini juga memberikan kerusakan sejumlah 40 kepada 1 Pokémon Cadangan sendiri. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 130,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card