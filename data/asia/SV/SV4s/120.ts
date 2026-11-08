import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Techno Radar"
	},

	illustrator: "inose yukie",
	category: "Trainer",

	effect: {
		'id-id': "Kartu ini dapat digunakan jika pemain membuang 1 lembar Kartu Pegangan sendiri ke Trash. Pilih paling banyak 2 lembar Pokémon Futur dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card