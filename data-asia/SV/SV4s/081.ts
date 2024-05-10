import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Slither Wing"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	description: {
		id: "Pokémon misterius yang memiliki kemiripan dengan makhluk hidup bernama Slither Wing yang diperkenalkan dalam sebuah buku kuno."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Meratakan Tanah"
		},

		effect: {
			id: "Buang 1 kartu dari atas Deck lawan ke Trash."
		},

		cost: ["Fighting"]
	}, {
		name: {
			id: "Luka Bakar Ganas"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 90. Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 120,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card