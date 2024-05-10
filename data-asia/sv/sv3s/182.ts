import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Larvitar"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Larvitar terlahir di bawah tanah yang dalam. Untuk membentuk tubuhnya, Pokémon ini menjadi pupa setelah memakan habis segunung tanah."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menohok"
		},

		damage: 10,
		cost: ["Fighting"]
	}, {
		name: {
			id: "Menentang"
		},

		damage: 30,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card