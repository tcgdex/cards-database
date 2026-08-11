import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Markas Utama Liga Pokémon"
	},

	illustrator: "Oswaldo KATO",
	category: "Trainer",

	effect: {
		'id-id': "Energi yang dibutuhkan oleh Pokémon Basic di Arena kedua pemain untuk menggunakan serangan masing-masing bertambah 1 Energi {Bening}."
	},

	trainerType: "Stadium",
	regulationMark: "G"
}

export default card