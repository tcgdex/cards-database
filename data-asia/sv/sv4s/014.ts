import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Nymble"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		id: "Sepasang kaki ketiga Nymble terlipat. Pokémon ini memiliki kekuatan kaki untuk dapat melompat setinggi 10 meter ketika terdesak."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Melompat Berkeliling"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card