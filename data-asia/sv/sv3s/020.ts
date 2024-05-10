import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Heatmor"
	},

	illustrator: "otumami",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		id: "Heatmor menggunakan api bagaikan lidah. Pokémon ini secara perlahan melelehkan eksoskeleton keras Durant dan menyantapnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Energy Burner"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dikenakan pada Pokémon Bertarung lawan."
		},

		damage: "30+",
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card