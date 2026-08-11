import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Seedot"
	},

	illustrator: "Asako Ito",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'id-id': "Jika diam saja, Seedot terlihat persis seperti beri. Pokémon ini bermain dengan membuat kaget Pokémon yang datang untuk mematuknya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Kaku"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30."
		},

		cost: ["Grass"]
	}, {
		name: {
			'id-id': "Bergantung"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card