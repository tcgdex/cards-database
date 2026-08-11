import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Maractus"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		id: "Maractus menebar benih setahun sekali. Biji bunga ini mengandung banyak nutrisi dan menjadi sumber makanan yang berharga di padang pasir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Double Draw"
		},

		effect: {
			id: "Ambil 2 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Jarum Misil"
		},

		effect: {
			id: "Lempar koin 4 kali. Serangan ini memberikan kerusakan sejumlah 30 untuk tiap lemparan dengan hasil sisi depan."
		},

		damage: "30×",
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