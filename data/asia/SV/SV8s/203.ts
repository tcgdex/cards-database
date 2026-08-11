import { Card } from "models/database/card"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Appletun"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		'id-id': "Appletun mengusir Lechonk yang datang untuk menjilat madu manis di punggungnya dengan memuntahkan nektar lengket."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Sweet Melt"
		},

		effect: {
			'id-id': "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			'id-id': "Wild Tackle"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 130,
		cost: ["Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card