import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Sawsbuck"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		'id-id': "Sawsbuck wujud musim gugur dikenal bersifat sangat kasar. Pertengkaran antara yang jantan tidak pernah berakhir."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Perubahan Empat Musim"
		},

		effect: {
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Stadium dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Tanduk Tenaga Super"
		},

		damage: 110,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card