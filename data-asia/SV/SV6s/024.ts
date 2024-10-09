import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Ogerpon Topeng Teal"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		id: "Pokémon yang suka jahil dan penuh rasa ingin tahu. Ia bertarung dengan menarik keluar energi tipe yang terkandung dalam topeng."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Jalan-jalan Gunung"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Serangan Balik Oni"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 20 untuk tiap Pokémon Cadangan lawan."
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