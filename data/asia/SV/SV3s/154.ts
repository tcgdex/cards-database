import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tukar Pokémon"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'id-id': "Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card