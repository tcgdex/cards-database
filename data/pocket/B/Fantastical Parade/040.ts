import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [615],

	name: {
		'en-us': "Cryogonal"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "Cryogonal uses its chains of ice to constrict its\nopponents and then flash-freezes them where\nthey stand."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Frozen Lock"
		},

		damage: 20,
		cost: ["Water"],

		effect: {
			'en-us': "During your opponent's next turn, they can't play any Item cards from their hand."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card