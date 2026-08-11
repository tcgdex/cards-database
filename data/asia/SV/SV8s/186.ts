import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Castform Wujud Matahari"
	},

	illustrator: "Narano",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		id: "Wujud Castform pada hari yang cerah. Pada percobaan meletakkannya di depan pemanas, Pokémon ini tidak berubah menjadi wujud ini."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menghanguskan"
		},

		effect: {
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		cost: ["Fire"]
	}, {
		name: {
			id: "Sunny Assist"
		},

		effect: {
			id: "Pindahkan semua Energi yang dikenakan pada Pokémon ini ke 1 Pokémon Cadangan."
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "H"
}

export default card