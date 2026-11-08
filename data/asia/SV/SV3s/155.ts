import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gorgeous Mantle"
	},

	illustrator: "Toyste Beach",
	category: "Trainer",

	effect: {
		'id-id': "HP maksimal Pokémon (selain Pokémon yang memiliki Peraturan) yang mengenakan kartu ini bertambah sejumlah 100 dan saat Pokémon tersebut KO karena menerima kerusakan akibat serangan dari Pokémon lawan, Kartu Point yang diambil lawan bertambah 1 lembar."
	},

	trainerType: "Item",
	regulationMark: "G"
}

export default card