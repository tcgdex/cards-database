import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Rimba Berbahaya"
	},

	illustrator: "AYUMI ODASHIMA",
	category: "Trainer",

	effect: {
		'id-id': "Jumlah Token Kerusakan yang diletakkan akibat kondisi Racun pada semua Pokémon (selain Pokémon {Kegelapan}) kedua pemain yang mengalami kondisi Racun masing-masing bertambah sejumlah 2."
	},

	trainerType: "Stadium",
	regulationMark: "H"
}

export default card