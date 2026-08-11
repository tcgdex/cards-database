import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Pusat Perbelanjaan Kota"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'id-id': "Kedua pemain 1 kali pada tiap gilirannya sendiri dapat memilih 1 lembar Pokémon Tool dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card