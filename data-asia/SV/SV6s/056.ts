import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Froakie"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		id: "Froakie mengeluarkan gelembung dari dada dan punggungnya. Pokémon ini menerima serangan menggunakan gelembungnya yang elastis dan mengurangi kerusakan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggerombol"
		},

		effect: {
			id: "Pilih paling banyak 2 lembar Froakie dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			id: "Melompat Berkeliling"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card