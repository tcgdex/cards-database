import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Iron Valiant"
	},

	illustrator: "chibi",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],

	description: {
		'id-id': "Terdapat kemungkinan bahwa Pokémon ini adalah objek misterius bernama Iron Valiant yang tertera dalam suatu jurnal ekspedisi."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Perhitungan"
		},

		effect: {
			'id-id': "Lihat 4 kartu dari atas Deck sendiri, tukar urutan kartu sesukanya, lalu kembalikan ke atas Deck."
		},

		cost: ["Psychic"]
	}, {
		name: {
			'id-id': "Majestic Sword"
		},

		effect: {
			'id-id': "Jika pada giliran ini, Supporter Futur telah dimainkan dari Kartu Pegangan, kerusakan yang diberikan bertambah sejumlah 100."
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