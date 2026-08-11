import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Bellossom"
	},

	illustrator: "sui",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		id: "Kadang Bellossom berkumpul dan menampilkan gerak bagaikan menari. Disebut sebagai ritual memanggil matahari."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Bubuk Tidur"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		},

		damage: 30,
		cost: ["Colorless"]
	}, {
		name: {
			id: "Powerful Dance"
		},

		effect: {
			id: "Lempar koin untuk tiap Energi yang dikenakan pada Pokémon ini. Serangan ini memberikan kerusakan sejumlah 90 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "90×",
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card