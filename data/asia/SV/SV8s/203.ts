import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Appletun"
	},

	illustrator: "MINAMINAMI Take",
	category: "Pokemon",
	hp: 90,
	types: ["Dragon"],

	description: {
		id: "Appletun mengusir Lechonk yang datang untuk menjilat madu manis di punggungnya dengan memuntahkan nektar lengket."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Sweet Melt"
		},

		effect: {
			id: "Pada giliran lawan berikutnya, Pokémon yang menerima serangan ini tidak dapat menggunakan serangan."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			id: "Wild Tackle"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 130,
		cost: ["Grass", "Fire"]
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card