import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Poppy"
	},

	illustrator: "yuu",
	category: "Trainer",

	effect: {
		'id-id': "Pilih paling banyak 2 Energi yang dikenakan pada 1 Pokémon di Arena sendiri, lalu pindahkan ke 1 Pokémon sendiri lainnya."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card