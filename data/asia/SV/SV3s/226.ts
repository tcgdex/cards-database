import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gadis Parasol"
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		'id-id': "Kocok kembali semua Kartu Pegangan sendiri ke Deck. Setelah itu, ambil 4 kartu dari atas Deck. Jika ini digunakan pada giliran pertama Pemain Kedua, jumlah kartu yang diambil menjadi 8 lembar."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card