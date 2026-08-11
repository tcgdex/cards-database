import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Norman"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		'id-id': "Ambil 2 kartu dari atas Deck sendiri. Jika Pokémon Bertarung lawan adalah Pokémon {ex}, ambil lagi 2 kartu tambahan."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card