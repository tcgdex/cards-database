import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Mantyke"
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		id: "Mantyke berenang bersama gerombolan Remoraid. Jika diserang musuh, Pokémon ini akan bertarung bersama gerombolan tersebut."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Penyembuhan Berapung-apung"
		},

		effect: {
			id: "Pulihkan HP 1 Pokémon Cadangan sendiri sejumlah 120."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card