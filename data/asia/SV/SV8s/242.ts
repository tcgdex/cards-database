import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Counter Gain"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'id-id': "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, Energi yang dibutuhkan oleh Pokémon yang mengenakan kartu ini untuk menggunakan serangan berkurang 1 Energi {Bening}."
	},

	trainerType: "Tool",
	regulationMark: "H"
}

export default card