import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Darumaka"
	},

	illustrator: "osare",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		id: "Api yang membara di dalam tubuhnya menjadi sumber kekuatan Darumaka. Jika apinya mengecil, Pokémon ini jadi mengantuk."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Tenaga Super"
		},

		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			id: "Serudukan Api"
		},

		effect: {
			id: "Pokémon ini juga menerima kerusakan sejumlah 20."
		},

		damage: 50,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card