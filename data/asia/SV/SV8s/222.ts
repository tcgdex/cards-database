import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Peselancar"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		'id-id': "Tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan. Setelah itu, ambil kartu dari atas Deck hingga jumlah Kartu Pegangan sendiri menjadi 5 lembar."
	},

	trainerType: "Supporter",
	regulationMark: "H"
}

export default card