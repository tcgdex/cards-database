import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Absol"
	},

	illustrator: "Shinji Kanda",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	description: {
		id: "Karena memiliki kemampuan untuk mendeteksi bahaya, orang salah sangka sehingga mengira Absol adalah Pokémon pembawa malapetaka."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Draw Sense"
		},

		effect: {
			id: "Ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 5 lembar. Sebelum mengambil kartu dari atas Deck, pemain dapat membuang sesukanya Kartu Pegangan sendiri ke Trash."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Tebasan Diperkuat"
		},

		effect: {
			id: "Jika Pokémon ini mengenakan Pokémon Tool, kerusakan yang diberikan bertambah sejumlah 60."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card