import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drifblim"
	},

	illustrator: "Yumi",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [426],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Drifloon"
	},

	description: {
		'en-us': "They carry people and Pokémon, but the\nwind can catch them, so there can't be a\nfixed destination."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Balloon Barrage"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"],

		effect: {
			'en-us': "This attack does 20 more damage for each Energy attached to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card