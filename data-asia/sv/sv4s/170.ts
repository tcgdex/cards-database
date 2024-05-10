import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Norman"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		id: "Ambil 2 kartu dari atas Deck sendiri. Jika Pokémon Bertarung lawan adalah Pokémon {ex}, ambil lagi 2 kartu tambahan."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card