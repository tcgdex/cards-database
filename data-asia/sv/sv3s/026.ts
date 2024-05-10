import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Sharpedo"
	},

	illustrator: "Tonji Matsuno",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	description: {
		id: "Sharpedo dikenal sebagai Geng Laut dan menyerang semua kapal yang masuk ke perairan yang menjadi habitatnya tanpa kecuali."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Aqua Impact"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Energi yang dibutuhkan oleh Pokémon Bertarung lawan untuk Mundur."
		},

		damage: "10+",
		cost: ["Water"]
	}, {
		name: {
			id: "Jet Head"
		},

		damage: 60,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card