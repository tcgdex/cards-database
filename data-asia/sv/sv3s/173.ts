import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Snorunt"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		id: "Dikabarkan beberapa Snorunt berkumpul dan hidup bersama di bawah daun besar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Beling Es"
		},

		effect: {
			id: "Jika Pokémon Bertarung lawan adalah Pokémon {Petarung}, kerusakan yang diberikan bertambah sejumlah 30."
		},

		damage: "10+",
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card