import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Purrloin"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		id: "Dengan tingkahnya yang imut, Purrloin membuat lawannya lengah. Saat lawan menghampirinya, Pokémon ini menggaruk lawan dengan cakarnya yang tajam dan menertawakannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menginjak"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			id: "Tendangan Kucing"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card