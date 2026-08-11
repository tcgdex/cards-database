import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Sagitta"
	},

	illustrator: "DOM",
	category: "Trainer",

	effect: {
		'id-id': "Hingga akhir giliran digunakannya kartu ini, semua Pokémon sendiri tidak dapat menggunakan serangan. (Termasuk Pokémon yang baru dimasukkan ke Arena.) Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, lalu kenakan pada 1 Pokémon sendiri. Kemudian, kocok Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card