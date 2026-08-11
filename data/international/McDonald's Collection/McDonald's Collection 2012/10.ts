import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",

	dexId: [559],

	description: {
		'en-us': "Its skin has a rubbery elasticity, so it can reduce damage by defensively pulling its skin up to its neck."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule"
		},

		damage: 10
	}],

	name: {
		'en-us': "Scraggy",
		'fr-fr': "Baggiguane"
	},

	rarity: "None",
	hp: 60,
	types: ["Darkness"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281787,
				tcgplayer: 88986
			}
		}
	]
}

export default card

