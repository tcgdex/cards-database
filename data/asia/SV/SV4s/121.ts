import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Kemoceng Terkutuk"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'id-id': "Saat Pokémon yang mengenakan kartu ini KO karena menerima kerusakan akibat serangan dari Pokémon lawan, pilih 1 kartu dari Kartu Pegangan lawan tanpa melihat sisi depan, lalu buang ke Trash."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card