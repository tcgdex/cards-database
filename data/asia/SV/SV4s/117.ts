import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Counter Catcher"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'id-id': "Kartu ini hanya dapat digunakan saat sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan. Pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card