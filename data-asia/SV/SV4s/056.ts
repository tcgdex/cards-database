import { Card } from "../../../interfaces"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		id: "Woobat"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		id: "Sambil mengeluarkan gelombang ultrasonik, Woobat terbang berputar-putar ke sekelilingnya sambil mencari Pokémon serangga yang merupakan makanannya."
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
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card