import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Brute Bonnet"
	},

	illustrator: "danciao",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		'id-id': "Terdapat kemungkinan bahwa Pokémon ini merupakan makhluk hidup yang tertera sebagai Brute Bonnet dalam suatu buku."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menyemprotkan Racun"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Memukul Tanpa Henti"
		},

		effect: {
			'id-id': "Kerusakan yang diberikan bertambah sejumlah 50 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "50+",
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card