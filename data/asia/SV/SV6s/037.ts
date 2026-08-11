import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Lampent"
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		'id-id': "Lampent mengisap roh dan menyalakan apinya. Pokémon ini menjadi berkeliaran di sekitar rumah sakit untuk menunggu ajal manusia."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Nyala Api"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			'id-id': "Berkobar Habis"
		},

		effect: {
			'id-id': "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
		},

		damage: 60,
		cost: ["Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card