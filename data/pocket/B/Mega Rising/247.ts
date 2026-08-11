import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Goomy"
	},

	illustrator: "Kariya",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [704],
	hp: 40,
	types: ["Dragon"],

	description: {
		'en-us': "Goomy's horns are excellent sensory organs that\ncover all five of Goomy's senses. Goomy picks\nup on danger from the movement of the air."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Sticky Membrane"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, attacks used by your opponent's Active Pokémon cost 1 {C} more."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Ram"
		},

		damage: 30,
		cost: ["Water", "Psychic"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card