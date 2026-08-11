import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Ting-Lu"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		id: "Ting-Lu menurunkan kepalanya yang sangat berat secara perlahan sehingga menyebabkan retakan tanah yang besar sedalam 50 m."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Ground Crack"
		},

		effect: {
			id: "Jika ada Stadium di Arena, serangan ini juga memberikan kerusakan masing-masing sejumlah 30 kepada semua Pokémon Cadangan lawan, lalu buang Stadium tersebut ke Trash. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		damage: 30,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Hantaman Penuh Tenaga"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card