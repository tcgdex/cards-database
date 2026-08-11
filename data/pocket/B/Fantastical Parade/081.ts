import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [68],

	name: {
		'en-us': "Machamp"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machoke"
	},

	description: {
		'en-us': "With four arms that react more quickly than it\ncan think, it can execute many punches at once."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Knocking Hammer"
		},

		damage: 80,
		cost: ["Fighting", "Fighting"],

		effect: {
			'en-us': "Discard the top card of your opponent's deck."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 2
}

export default card