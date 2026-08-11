import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gouging Fire ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 230,
	types: ["Fire"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Heat Blast"
		},

		damage: 60,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			'id-id': "Maju Pesat Api Berkobar"
		},

		effect: {
			'id-id': "Jika Pokémon ini telah menggunakan serangan ini, Pokémon ini tidak dapat menggunakan Maju Pesat Api Berkobar hingga meninggalkan Arena Bertarung."
		},

		damage: 260,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card