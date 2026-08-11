import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [82],

	name: {
		'en-us': "Magneton"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Magnemite"
	},

	description: {
		'en-us': "Three Magnemite are linked by a strong magnetic\nforce. Earaches will occur if you get too close."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Spark"
		},

		damage: 20,
		cost: ["Lightning"],

		effect: {
			'en-us': "This attack also does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card