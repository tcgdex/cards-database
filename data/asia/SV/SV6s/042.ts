import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Poliwhirl"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		'id-id': "Kulit seluruh tubuhnya lembap, tetapi bagian pusaran pada perutnya terasa licin."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Hipnotis"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		cost: ["Water"]
	}, {
		name: {
			'id-id': "Tamparan Ganda"
		},

		effect: {
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "30×",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card