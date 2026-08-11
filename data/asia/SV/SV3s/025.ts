import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Carvanha"
	},

	illustrator: "Jerky",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		'id-id': "Pokémon ini memiliki taring yang tajam dan rahang yang gagah. Pelaut tidak akan mendekati sarang Carvanha."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Taring Tajam"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card