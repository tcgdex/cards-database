import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Atsuko Nishida",
	category: "Pokemon",

	dexId: [509],

	description: {
		'en-us': "They steal from people for fun, but their victims can’t help but forgive them. Their deceptively cute act is perfect."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Knock Off",
			'fr-fr': "Sabotage"
		},

		damage: 20,

		effect: {
			'en-us': "Flip a coin. If heads, discard a random card from your opponent’s hand.",
			'fr-fr': "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire."
		}
	}],

	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan"
	},

	rarity: "None",
	hp: 60,
	types: ["Darkness"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281786,
				tcgplayer: 88463
			}
		}
	]
}

export default card

