import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Jirachi"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		id: "Dikatakan bahwa Jirachi bangun hanya 7 hari dalam 1000 tahun dan menggunakan kekuatan yang dapat mewujudkan harapan apa pun."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tudung Bintang"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, semua Pokémon Cadangan sendiri tidak menerima efek untuk meletakkan Token Kerusakan akibat serangan yang digunakan oleh Pokémon Basic lawan."
		}
	}],

	attacks: [{
		name: {
			id: "Energy Charge"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card