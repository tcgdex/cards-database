import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Dafin"
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih paling banyak 2 lembar Pokémon, jika hasilnya sisi belakang, pilih 1 lembar Pokémon Basic dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card