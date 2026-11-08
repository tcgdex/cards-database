import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [327],

	name: {
		'en-us': "Spinda"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "Each Spinda's spot pattern is different. With its\nstumbling movements, it evades opponents'\nattacks brilliantly!"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Teetering Steps"
		},

		damage: 40,
		cost: ["Colorless"],

		effect: {
			'en-us': "This Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card