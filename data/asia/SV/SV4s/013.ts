import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Nymble"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		'id-id': "Sepasang kaki ketiga Nymble terlipat. Pokémon ini memiliki kekuatan kaki untuk dapat melompat setinggi 10 meter ketika terdesak."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menggerogot"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card