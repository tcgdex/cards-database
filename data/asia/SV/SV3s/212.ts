import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Shauntal"
	},

	illustrator: "En Morikura",
	category: "Trainer",

	effect: {
		'id-id': "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Pokémon Cadangan lawan, lalu tukar dengan Pokémon Bertarung. Jika hasilnya sisi belakang, tukar Pokémon Bertarung sendiri dengan Pokémon Cadangan."
	},

	trainerType: "Supporter",
	regulationMark: "G"
}

export default card