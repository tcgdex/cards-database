import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Rockruff"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],

	description: {
		'id-id': "Rockruff sangat jinak saat masih kecil. Meskipun tumbuh menjadi kasar, Pokémon ini tidak pernah melupakan kebaikan pemiliknya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menggigit"
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