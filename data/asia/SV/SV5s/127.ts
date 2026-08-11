import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Emergency Board"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'id-id': "Energi yang dibutuhkan oleh Pokémon yang mengenakan kartu ini untuk Mundur berkurang 1. Jika sisa HP Pokémon tersebut adalah 30 atau kurang, Pokémon tersebut menjadi tidak membutuhkan Energi untuk Mundur."
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card