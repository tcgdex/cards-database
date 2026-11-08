import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gravel"
	},

	illustrator: "Naoki Saito",
	category: "Trainer",

	effect: {
		'id-id': "Pilih paling banyak 2 lembar Pokémon dari Kartu Pegangan sendiri, perlihatkan ke lawan, lalu kembalikan ke Deck. Setelah itu, pilih Pokémon dari Deck sendiri paling banyak sejumlah kartu yang telah dikembalikan, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card