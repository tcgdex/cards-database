import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Greninja ex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 310,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Pisau Shinobi"
		},

		effect: {
			'id-id': "Pemain dapat memilih 1 kartu sesukanya dari Deck sendiri, lalu menambahkannya ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		damage: 170,
		cost: ["Water"]
	}, {
		name: {
			'id-id': "Pukulan Beruntun Mengganda"
		},

		effect: {
			'id-id': "Buang 2 Energi yang dikenakan pada Pokémon ini ke Trash, serangan ini memberikan kerusakan masing-masing sejumlah 120 kepada 2 Pokémon lawan. [Kelemahan dan Resistansi Pokémon Cadangan tidak mempengaruhi jumlah kerusakan.]"
		},

		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card