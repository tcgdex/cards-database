import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Nuzleaf"
	},

	illustrator: "Lee HyunJung",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'id-id': "Nuzleaf hidup jauh di dalam hutan. Pokémon ini membuat seruling menggunakan daun di kepalanya dan meniupkan suara seruling yang membuat perasaan menjadi tidak tenang."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Menohok"
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			'id-id': "Tamparan Beruntun"
		},

		effect: {
			'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "30×",
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