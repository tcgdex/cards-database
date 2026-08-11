import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2016'

const card: Card = {
	set: Set,
	illustrator: "Akira Komayama",
	category: "Pokemon",

	dexId: [129],

	description: {
		'en-us': "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today."
	},

	hp: 30,
	types: ["Water"],

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Epic Splash",
			'fr-fr': "Trempette Épique"
		},

		damage: 30,

		effect: {
			'en-us': "Flip 2 coins. If either of them is tails, this attack does nothing.",
			'fr-fr': "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien."
		}
	}],

	name: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe"
	},

	rarity: "None",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 295140,
				tcgplayer: 275060
			}
		}
	]
}

export default card

