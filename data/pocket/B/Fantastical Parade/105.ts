import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [510],

	name: {
		'en-us': "Liepard"
	},

	illustrator: "sui",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Purrloin"
	},

	description: {
		'en-us': "Don't be fooled by its gorgeous fur and elegant\nfigure. This is a moody and vicious Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Fasten Claws"
		},

		damage: 30,
		cost: ["Darkness"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card