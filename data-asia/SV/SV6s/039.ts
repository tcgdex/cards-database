import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Chi-Yu"
	},

	illustrator: "Oku",
	category: "Pokemon",
	hp: 110,
	types: ["Fire"],

	description: {
		id: "Chi-Yu adalah perasaan iri dan dengki yang berkumpul ke magatama yang menjadi api pemicu banyaknya permusuhan. Ia menyelimuti dirinya dengan api, lalu berubah menjadi Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mengambil"
		},

		effect: {
			id: "Ambil 2 kartu dari atas Deck sendiri."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Ground Melt"
		},

		effect: {
			id: "Jika ada Stadium di Arena, kerusakan yang diberikan bertambah sejumlah 60. Setelah itu, buang Stadium tersebut ke Trash."
		},

		damage: "60+",
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card