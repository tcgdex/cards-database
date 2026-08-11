import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Seile"
	},

	illustrator: "kantaro",
	category: "Trainer",

	effect: {
		'id-id': "Kartu ini juga dapat digunakan pada giliran pertama Pemain Pertama. Buang semua Kartu Pegangan sendiri ke Trash, lalu ambil 5 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card