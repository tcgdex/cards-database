import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Hands ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Arm Press"
		},

		damage: 160,
		cost: ["Lightning", "Lightning", "Colorless"]
	}, {
		name: {
			id: "Amplifikasi Syukur"
		},

		effect: {
			id: "Jika Pokémon lawan KO karena kerusakan akibat serangan ini, ambil Kartu Point 1 lembar lebih banyak."
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