import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Roark"
	},

	illustrator: "Ryuta Fuse",
	category: "Trainer",

	effect: {
		'id-id': "Ambil 2 kartu dari atas Deck sendiri. Pilih 1 lembar Energi Dasar dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card