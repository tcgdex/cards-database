import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Pengurus"
	},

	illustrator: "Akira Komayama",
	category: "Trainer",

	effect: {
		'id-id': "Ambil 2 kartu dari atas Deck sendiri. Setelah itu, jika ada Balai Kota di Arena, Pengurus ini tidak dibuang ke Trash, tapi dikocok kembali ke Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card