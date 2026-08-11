import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Rompi Tidak Mau Kalah"
	},

	illustrator: "Ayaka Yoshida",
	category: "Trainer",

	effect: {
		'id-id': "Jika sisa Kartu Point sendiri lebih banyak dari sisa Kartu Point lawan, kerusakan akibat serangan dari Pokémon lawan yang diterima Pokémon yang mengenakan kartu ini berkurang sejumlah 40."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card