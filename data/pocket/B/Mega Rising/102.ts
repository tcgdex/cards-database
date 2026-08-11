import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mega Altaria ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [334],
	hp: 190,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Swablu"
	},

	description: {
		'en-us': "On sunny days, it flies freely through the sky and\nblends into the clouds. It sings in a beautiful\nsoprano."
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Mega Harmony"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"],

		effect: {
			'en-us': "This attack does 30 more damage for each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card