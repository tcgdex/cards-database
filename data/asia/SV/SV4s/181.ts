import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Keintensan Profesor Olim"
	},

	illustrator: "Ryota Murayama",
	category: "Trainer",

	effect: {
		'id-id': "Pilih paling banyak 2 Pokémon Purba sendiri, lalu kenakan Energi Dasar masing-masing 1 lembar dari Trash. Setelah itu, ambil 3 kartu dari atas Deck sendiri."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card