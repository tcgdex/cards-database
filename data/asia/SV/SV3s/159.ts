import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "MJ Serangan Mendadak"
	},

	illustrator: "Studio Bora Inc.",
	category: "Trainer",

	effect: {
		'id-id': "Pokémon yang mengenakan kartu ini dapat menggunakan serangan yang tertulis pada kartu ini. [Pemain tetap membutuhkan Energi untuk menggunakan serangan tersebut.] Kartu ini yang dikenakan pada Pokémon dibuang ke Trash pada akhir giliran sendiri."
	},

	trainerType: "Tool",
	regulationMark: "G"
}

export default card