import { Card } from "../../../interfaces"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		id: "Electabuzz"
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		id: "Banyak pembangkit listrik yang meletakkan Pokémon tanah untuk menanggulangi Electabuzz yang mengincar listrik."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Chop"
		},

		damage: 20,
		cost: ["Lightning"]
	}, {
		name: {
			id: "Pukulan Listrik"
		},

		damage: 50,
		cost: ["Lightning", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card