import { Card } from '../../../interfaces'
import Set from '../Macdonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	description: {
		en: "It blows fire through its nose. When it catches a cold, the fire becomes pitch-black smoke instead."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Ember",
			fr: "Flammèche"
		},

		damage: 30,

		effect: {
			en: "Discard an Energy attached to this Pokémon.",
			fr: "Défaussez une Énergie attachée à ce Pokémon."
		}
	}],

	variants: [
		{ type: 'normal', size: 'standard' }
	],

	name: {
		en: "Tepig",
		fr: "Gruikui"
	},

	rarity: "None",
	hp: 70,
	types: ["Fire"],

	thirdParty: {
		tcgplayer: 89882
	}
}

export default card