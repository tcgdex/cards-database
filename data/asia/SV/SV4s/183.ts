import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Mela"
	},

	illustrator: "rika",
	category: "Trainer",

	effect: {
		'id-id': "Kartu ini dapat digunakan jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO. Pilih 1 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada Pokémon sendiri. Setelah itu, ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 6 lembar."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card