import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Surat Pemotivasi"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'id-id': "Kartu ini dapat digunakan jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO. Pilih paling banyak 3 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card