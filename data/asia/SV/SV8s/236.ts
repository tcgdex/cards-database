import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kecerdikan Clemont"
	},

	illustrator: "Shinya Mizuno",
	category: "Trainer",

	effect: {
		'id-id': "Pulihkan HP semua Pokémon {Listrik} sendiri masing-masing sejumlah 60."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card