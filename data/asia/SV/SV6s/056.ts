import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Froakie"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'id-id': "Froakie mengeluarkan gelembung dari dada dan punggungnya. Pokémon ini menerima serangan menggunakan gelembungnya yang elastis dan mengurangi kerusakan."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menggerombol"
		},

		effect: {
			'id-id': "Pilih paling banyak 2 lembar Froakie dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		},

		cost: ["Water"]
	}, {
		name: {
			'id-id': "Melompat Berkeliling"
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