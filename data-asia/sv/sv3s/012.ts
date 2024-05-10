import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Scovillain"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		id: "Kepala merah Scovillain mengubah komponen pedas menjadi energi api dan menyebarkan semburan api yang sangat pedas."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			id: "Tipe Ganda"
		},

		effect: {
			id: "Selama Pokémon ini ada di Arena, Pokémon ini menjadi 2 tipe yaitu {Daun} dan {Api}."
		}
	}],

	attacks: [{
		name: {
			id: "Spicy Head"
		},

		effect: {
			id: "Kerusakan akibat serangan ini tidak terpengaruh oleh Resistansi."
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