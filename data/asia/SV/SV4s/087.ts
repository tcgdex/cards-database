import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Purrloin"
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'id-id': "Dengan tingkahnya yang imut, Purrloin membuat lawannya lengah. Saat lawan menghampirinya, Pokémon ini menggaruk lawan dengan cakarnya yang tajam dan menertawakannya."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menginjak"
		},

		damage: 10,
		cost: ["Darkness"]
	}, {
		name: {
			'id-id': "Tendangan Kucing"
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