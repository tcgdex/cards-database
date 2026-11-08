import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Ambipom"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [424],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Aipom"
	},

	description: {
		'en-us': "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Excited Tail"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 damage for each heads. If this Pokémon has Lucky Mittens attached, flip 4 coins instead."
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