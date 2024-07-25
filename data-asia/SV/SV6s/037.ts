import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Lampent"
	},

	illustrator: "Rond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		id: "Lampent mengisap roh dan menyalakan apinya. Pokémon ini menjadi berkeliaran di sekitar rumah sakit untuk menunggu ajal manusia."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Nyala Api"
		},

		damage: 20,
		cost: ["Fire"]
	}, {
		name: {
			id: "Berkobar Habis"
		},

		effect: {
			id: "Buang semua Energi yang dikenakan pada Pokémon ini ke Trash."
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