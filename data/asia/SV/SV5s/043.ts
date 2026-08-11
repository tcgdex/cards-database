import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Wiglett"
	},

	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		id: "Wiglett dapat mencium bau yang dikeluarkan Veluza yang berada dalam jarak 20 m, lalu bersembunyi di dalam pasir."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Barang yang Menguntungkan"
		},

		effect: {
			id: "Pilih 1 lembar Item dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			id: "Aqua Bomb"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 40,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card