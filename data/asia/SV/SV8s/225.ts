import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Drasna"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'id-id': "Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, lempar koin 1 kali. Jika hasilnya sisi depan, ambil 8 kartu, jika hasilnya sisi belakang, ambil 3 kartu dari atas Deck."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card