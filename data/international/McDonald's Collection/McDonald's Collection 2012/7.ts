import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",

	dexId: [527],

	description: {
		'en-us': "Its habitat is dark forests and caves. It emits ultrasonic waves from its nose to learn about its surroundings."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Psy Bolt",
			'fr-fr': "Choc Mental"
		},

		damage: 20,

		effect: {
			'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
		}
	}],

	name: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir"
	},

	rarity: "None",
	hp: 60,
	types: ["Psychic"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281784,
				tcgplayer: 90629
			}
		}
	]
}

export default card

