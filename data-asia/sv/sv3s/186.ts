import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Yveltal"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		id: "Kabarnya ketika hidupnya berakhir, Yveltal menyerap habis nyawa berbagai makhluk hidup dan kembali ke wujud kepompong."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menebas Turun"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan adalah Pokémon Evolusi, kerusakan yang diberikan bertambah sejumlah 60."
		},

		damage: "30+",
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Dark Edge"
		},

		effect: {
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 120,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card