import { Card } from "../../../interfaces"
import Set from "../SV8s"

const card: Card = {
	set: Set,

	name: {
		id: "Clobbopus"
	},

	illustrator: "USGMEN",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Clobbopus naik ke darat untuk mencari makanan. Penuh rasa ingin tahu sehingga saat melihat sesuatu, Pokémon ini memukulnya terlebih dahulu dengan tentakelnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Gasak Sedikit"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 10."
		},

		damage: 30,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card