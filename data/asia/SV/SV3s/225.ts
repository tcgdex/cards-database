import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Muna"
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		'id-id': "Lihat 4 kartu dari atas Deck sendiri, pilih 2 kartu di antaranya, lalu tambahkan ke Kartu Pegangan. Kocok semua sisa kartu dengan sisi depan menghadap ke bawah, lalu kembalikan ke bawah Deck."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card