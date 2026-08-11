import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Venipede"
	},

	illustrator: "Tomokazu Komiya",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		'id-id': "Venipede adalah kerabat dekat Sizzlipede, tetapi jika keduanya bertemu, akan terjadi pertengkaran hebat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Cairan Racun"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Racun."
		},

		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Serangan Berputar"
		},

		damage: 40,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card