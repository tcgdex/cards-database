import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Capsakid"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		id: "Makin lama Capsakid berjemur, komponen pedas dalam tubuhnya makin bertambah, dan serangan jurusnya menjadi makin pedas."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menyerang"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card