import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Nymble"
	},

	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 40,
	types: ["Grass"],

	description: {
		id: "Sepasang kaki ketiga Nymble terlipat. Pokémon ini memiliki kekuatan kaki untuk dapat melompat setinggi 10 meter ketika terdesak."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggerogot"
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