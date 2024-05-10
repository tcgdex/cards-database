import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Raging Bolt ex"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 240,
	types: ["Dragon"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			id: "Letusan Raungan"
		},

		effect: {
			id: "Buang semua Kartu Pegangan sendiri ke Trash, lalu ambil 6 kartu dari atas Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Guntur Membahana Ekstrem"
		},

		effect: {
			id: "Buang sesukanya Energi Dasar yang dikenakan pada Pokémon di Arena sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 70 untuk tiap lembarnya."
		},

		damage: "70×",
		cost: ["Lightning", "Fighting"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card