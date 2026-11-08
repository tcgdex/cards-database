import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Levigato"
	},

	illustrator: "DOM",
	category: "Trainer",

	effect: {
		'id-id': "Lihat 7 kartu dari atas Deck sendiri, pilih Pokémon dan Trainer di antaranya masing-masing 1 lembar, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kocok kembali sisa kartu ke Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card