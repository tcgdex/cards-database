import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [649],

	name: {
		'en-us': "Genesect"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'en-us': "This ancient bug Pokémon was altered by Team\nPlasma. They upgraded the cannon on its back."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Metal Blast"
		},

		damage: 10,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each {M} Energy attached to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card