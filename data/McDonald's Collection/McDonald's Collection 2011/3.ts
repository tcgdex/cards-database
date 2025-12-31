import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [498],

	description: {
		en: "It blows fire through its nose. When it catches a cold, the fire becomes pitch-black smoke instead."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ember"
		},

		damage: 30,

		effect: {
			en: "Discard an Energy attached to this Pokémon."
		}
	}],

	variants: {
		normal: true,
		reverse: false,
		holo: false,
		firstEdition: false
	},

	name: {
		en: "Tepig"
	},

	rarity: "None",
	hp: 70,
	types: ["Fire"],

	thirdParty: {
		tcgplayer: 89882
	}
}

export default card