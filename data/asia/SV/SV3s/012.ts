import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Scovillain"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		'id-id': "Kepala merah Scovillain mengubah komponen pedas menjadi energi api dan menyebarkan semburan api yang sangat pedas."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'id-id': "Tipe Ganda"
		},

		effect: {
			'id-id': "Selama Pokémon ini ada di Arena, Pokémon ini menjadi 2 tipe yaitu {Daun} dan {Api}."
		}
	}],

	attacks: [{
		name: {
			'id-id': "Spicy Head"
		},

		effect: {
			'id-id': "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
		},

		damage: 110,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card