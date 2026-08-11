import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Remoraid"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'id-id': "Remoraid menggunakan sirip punggungnya yang berubah menjadi semacam pengisap untuk menempel di tubuh Mantine dan mendapatkan sisa makanan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Percikan Air"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card