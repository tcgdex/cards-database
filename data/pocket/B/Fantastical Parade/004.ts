import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [315],

	name: {
		'en-us': "Roselia"
	},

	illustrator: "Hajime Kusajima",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		'en-us': "It uses the different poisons in each hand\nseparately when it attacks. The stronger its\naroma, the healthier it is."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Trip Over"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card