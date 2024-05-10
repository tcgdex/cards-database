import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Sawsbuck"
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		id: "Sawsbuck wujud musim gugur dikenal bersifat sangat kasar. Pertengkaran antara yang jantan tidak pernah berakhir."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Perubahan Empat Musim"
		},

		effect: {
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Stadium dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}],

	attacks: [{
		name: {
			id: "Tanduk Tenaga Super"
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