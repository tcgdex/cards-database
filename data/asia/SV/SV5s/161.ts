import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Meltan"
	},

	illustrator: "Masa",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		'id-id': "Meltan melelehkan logam dan memakannya. Pokémon ini menyirkulasikan logam cair untuk menciptakan energi di dalam tubuhnya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Tandukan Kepala"
		},

		damage: 50,
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card