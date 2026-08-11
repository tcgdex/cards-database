import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Altaria"
	},

	illustrator: "sui",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [334],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Swablu"
	},

	description: {
		'en-us': "On sunny days, it flies freely through the sky and\nblends into the clouds. It sings in a beautiful\nsoprano."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Do the Wave"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card