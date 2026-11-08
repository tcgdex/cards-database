import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Darumaka"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [554],
	hp: 70,
	types: ["Fire"],

	description: {
		'en-us': "This popular symbol of good fortune will never\nfall over in its sleep, no matter how it's pushed\nor pulled."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Reckless Charge"
		},

		damage: 50,
		cost: ["Fire", "Fire"],

		effect: {
			'en-us': "This Pokémon also does 10 damage to itself."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card