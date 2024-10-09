import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Floette"
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		id: "Floette mengirimkan energi yang dinaikkan ke gelombang merah kepada bunga dan menarik potensinya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Tugas Kecil"
		},

		effect: {
			id: "Pilih paling banyak 3 lembar Energi Dasar dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			id: "Serangan Berputar"
		},

		damage: 40,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card