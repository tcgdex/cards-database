import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cyano"
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		'id-id': "Pilih paling banyak 3 lembar Pokémon {ex} dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card