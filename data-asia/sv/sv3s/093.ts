import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Klawf"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		id: "Klawf mengincar mangsanya dengan bergantung secara terbalik dari atas tebing, namun tidak akan bertahan lama karena darah mengalir ke kepalanya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Hysteric Scissor"
		},

		effect: {
			id: "Jika Pokémon ini mengalami Kondisi Khusus, kerusakan yang diberikan bertambah sejumlah 160."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Boiled Press"
		},

		effect: {
			id: "Ubah kondisi Pokémon ini menjadi Luka Bakar."
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