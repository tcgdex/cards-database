import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Boneka Snorlax"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'id-id': "Jika kartu ini ada di Kartu Pegangan saat memasukkan Pokémon ke Arena pada waktu Persiapan Bermain, pemain dapat memasukkannya ke Arena dengan sisi depan menghadap ke bawah sebagai Pokémon Basic tipe {Bening} dengan HP sejumlah 120. (Kartu ini hanya dapat dimasukkan ke Arena pada waktu Persiapan Bermain.) Pada giliran sendiri, kartu ini yang ada di Arena dapat dibuang ke Trash. Kartu ini tidak akan menjadi Kondisi Khusus dan tidak dapat Mundur. Meskipun kartu ini KO, lawan tidak dapat mengambil Kartu Point."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card