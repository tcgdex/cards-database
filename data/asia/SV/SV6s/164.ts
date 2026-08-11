import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Balai Kota"
	},

	illustrator: "MARINA Chikazawa",
	category: "Trainer",

	effect: {
		'id-id': "Pemain yang pada giliran ini telah memainkan Supporter dari Kartu Pegangan 1 kali pada tiap gilirannya sendiri dapat memulihkan HP semua Pokémon sendiri masing-masing sejumlah 10."
	},

	trainerType: "Stadium",
	regulationMark: "H"
}

export default card