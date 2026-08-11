import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Ogerpon Topeng Teal"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'id-id': "Pokémon yang suka jahil dan penuh rasa ingin tahu. Ia bertarung dengan menarik keluar energi tipe yang terkandung dalam topeng."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Jalan-jalan Gunung"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Serangan Balik Oni"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Pokémon Cadangan lawan."
		},

		damage: "20+",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card