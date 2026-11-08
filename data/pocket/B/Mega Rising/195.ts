import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Spinda"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [327],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "Each Spinda's spot pattern is different. With its\nstumbling movements, it evades opponents'\nattacks brilliantly!"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Dizzying Headbutt"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			'en-us': "Both Active Pokémon are now Confused."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card