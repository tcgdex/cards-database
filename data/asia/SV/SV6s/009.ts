import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Volbeat"
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'id-id': "Volbeat mengedipkan cahaya di posteriornya untuk berkomunikasi dengan sesamanya. Ia sangat menyukai aroma manis yang dikeluarkan Illumise."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Fast Sign"
		},

		effect: {
			'id-id': "Serangan ini juga dapat digunakan pada giliran pertama Pemain Pertama. Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Serangan Kerja Sama"
		},

		effect: {
			'id-id': "Jika ada Illumise di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 60."
		},

		damage: "20+",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card