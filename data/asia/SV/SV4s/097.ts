import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Honedge"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	description: {
		'id-id': "Tubuh asli Honedge adalah bola mata biru di gagang pedang. Pokémon ini mengisap vitalitas manusia menggunakan kain tuanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menyerang"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card