import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Slugma"
	},

	illustrator: "Gapao",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'id-id': "Konon lebih banyak Slugma yang hidup di dunia primitif saat gunung berapi lebih aktif daripada sekarang."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Magma Panas"
		},

		effect: {
			'id-id': "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
		},

		damage: 20,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card