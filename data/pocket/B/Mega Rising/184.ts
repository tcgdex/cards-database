import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Eevee"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [133],
	hp: 50,
	types: ["Colorless"],

	description: {
		'en-us': "Its genetic code is irregular. It may mutate if it is\nexposed to radiation from element stones."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Boosted Evolution"
		},

		effect: {
			'en-us': "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it."
		}
	}],

	attacks: [{
		name: {
			'en-us': "Stampede"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card