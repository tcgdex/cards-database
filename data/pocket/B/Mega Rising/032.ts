import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ho-Oh"
	},

	illustrator: "Ryota Murayama",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [250],
	hp: 120,
	types: ["Fire"],

	description: {
		'en-us': "It will reveal itself before a pure-hearted Trainer by\nshining its bright, rainbow-colored wings."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Blessed Burn"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		effect: {
			'en-us': "Heal 30 damage from each of your Benched Basic Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card