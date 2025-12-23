import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "match",
	category: "Pokemon",

	dexId: [529],

	description: {
		en: "It can dig through the ground at a speed of 30 mph. It could give a car running aboveground a good race."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hone Claws"
		},

		effect: {
			en: "During your next turn, each of this Pokémon’s attacks does 30 more damage (before applying Weakness and Resistance).\nFighting"
		}
	}],

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Drilbur"
	},

	rarity: "None",
	hp: 70,
	types: ["Fighting"],

	thirdParty: {
		tcgplayer: 84967
	}
}

export default card