import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Simisear"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	description: {
		id: "Ketika emosi Simisear bergejolak, bara api terbang tinggi dari kepala dan ekornya serta suhu memanas. Entah kenapa, makanan manis menjadi favorit Pokémon ini."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Monkey Trio"
		},

		effect: {
			id: "Jika ada Simisage, Simisear, dan Simipour di Arena sendiri, Pokémon ini menjadi tidak membutuhkan Energi {Bening} untuk menggunakan serangan."
		}
	}],

	attacks: [{
		name: {
			id: "Heat Tackle"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 190,
		cost: ["Fire", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card