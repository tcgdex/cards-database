import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Klawf"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'id-id': "Klawf mengincar mangsanya dengan bergantung secara terbalik dari atas tebing, namun tidak akan bertahan lama karena darah mengalir ke kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Hysteric Scissor"
		},

		effect: {
			'id-id': "Jika Pokémon ini mengalami Kondisi Khusus, kerusakan yang diberikan bertambah sejumlah 160."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Boiled Press"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon ini menjadi Luka Bakar."
		},

		damage: 80,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card