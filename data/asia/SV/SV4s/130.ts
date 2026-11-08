import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Skenario Profesor Futu"
	},

	illustrator: "hncl",
	category: "Trainer",

	effect: {
		'id-id': "Pilih 1 Pokémon di Arena sendiri, lalu kembalikan ke Kartu Pegangan. (Buang semua kartu selain Pokémon ke Trash.)"
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card