import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Iron Hands ex"
	},

	illustrator: "Toshinao Aoki",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Arm Press"
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}, {
		name: {
			'id-id': "Amplifikasi Syukur"
		},

		effect: {
			'id-id': "Jika Pokémon lawan KO karena kerusakan akibat serangan ini, ambil Kartu Point 1 lembar lebih banyak."
		},

		damage: 120,
		cost: ["Lightning", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card