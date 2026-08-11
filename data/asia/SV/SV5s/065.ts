import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cutiefly"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 30,
	types: ["Psychic"],

	description: {
		'id-id': "Serbuk sari dan nektar adalah makanan favoritnya. Cutiefly beterbangan di sekitar Gossifleur untuk mendapatkan serbuk sari Pokémon tersebut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Serapan Mini"
		},

		effect: {
			'id-id': "Pulihkan HP Pokémon ini sejumlah 10."
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card