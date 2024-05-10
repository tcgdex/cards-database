import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Iron Valiant"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		id: "Terdapat kemungkinan bahwa Pokémon ini adalah objek misterius bernama Iron Valiant yang tertera dalam suatu jurnal ekspedisi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Perhitungan"
		},

		effect: {
			id: "Lihat 4 kartu dari atas Deck sendiri, tukar urutan kartu sesukanya, lalu kembalikan ke atas Deck."
		},

		cost: ["Psychic"]
	}, {
		name: {
			id: "Majestic Sword"
		},

		effect: {
			id: "Jika pada giliran ini, Supporter Futur telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 100."
		},

		damage: "100+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card