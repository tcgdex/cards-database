import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Energi Medis"
	},

	illustrator: "5ban Graphics",
	category: "Energy",

	effect: {
		'id-id': "Kartu ini berlaku sebagai 1 Energi {Bening} selama dikenakan pada Pokémon. Saat kartu ini dikenakan dari Kartu Pegangan pada Pokémon, pulihkan HP Pokémon tersebut sejumlah 30."
	},

	energyType: "Special",
	regulationMark: "G"
}

export default card