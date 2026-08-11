import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [693],

	name: {
		'en-us': "Clawitzer"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Clauncher"
	},

	description: {
		'en-us': "The cannonballs of seawater that Clawitzer\nlaunches from its claw are powerful enough to\npunch through tanker hulls."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Aqua Shower"
		},

		cost: ["Water"],

		effect: {
			'en-us': "This attack does 20 damage to each of your opponent's Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card