import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tulip"
	},

	illustrator: "AKIRA EGAWA",
	category: "Trainer",

	effect: {
		'id-id': "Pilih paling banyak total 4 lembar Pokémon {Psychic} dan Energi Dasar {Psychic} dari Trash sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card