import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Capsakid"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'id-id': "Makin lama Capsakid berjemur, komponen pedas dalam tubuhnya makin bertambah, dan serangan jurusnya menjadi makin pedas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Sundulan Dua Kali"
		},

		effect: {
			'id-id': "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 50 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "50×",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card