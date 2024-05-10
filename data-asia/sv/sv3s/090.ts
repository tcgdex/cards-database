import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Rockruff"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		id: "Rockruff sangat jinak saat masih kecil. Meskipun tumbuh menjadi kasar, Pokémon ini tidak pernah melupakan kebaikan pemiliknya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggigit"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card