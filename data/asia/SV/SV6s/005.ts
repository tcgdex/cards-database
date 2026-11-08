import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Ariados"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'id-id': "Pokémon yang tidak membuat sarangnya di tempat tertentu. Ia akan berkeliaran mencari makanannya setelah lingkungan sekitar menjadi gelap."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Big Net"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena, Energi yang dibutuhkan oleh Pokémon Evolusi di Arena Bertarung lawan untuk Mundur bertambah 1."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Belitan Benang"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur."
		},

		damage: "10+",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card