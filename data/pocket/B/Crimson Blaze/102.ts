import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [681],

	name: {
		'en-us': "Aegislash"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Crown",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		'en-us': "Doublade"
	},

	description: {
		'en-us': "Once upon a time, a king with an Aegislash\nreigned over the land. His Pokémon eventually\ndrained him of life, and his kingdom fell with him."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Cursed Metal"
		},

		effect: {
			'en-us': "Attacks used by your {P} Pokémon and {M} Pokémon do +30 damage to your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Slicing Blade"
		},

		damage: 70,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card