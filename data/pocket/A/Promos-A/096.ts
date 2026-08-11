import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Houndoom"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [229],
	hp: 110,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Houndour"
	},

	description: {
		'en-us': "If you are burned by the flames it shoots from its\nmouth, the pain will never go away."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Diving Swipe"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Darkness"],

		effect: {
			'en-us': "Discard a random card from your opponent's hand."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card