import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kotak Pesan Dulu"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'id-id': "Giliran pemain akan selesai jika menggunakan kartu ini. Pilih paling banyak 2 lembar Item dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "H"
}

export default card