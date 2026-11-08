import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kouki Saitou",
	category: "Pokemon",

	dexId: [511],

	description: {
		'en-us': "This Pokémon dwells deep in the forest. Eating a leaf from its head whisks weariness away as if by magic."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte."
		}
	}, {
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe"
		},

		damage: 20
	}],

	name: {
		'en-us': "Pansage",
		'fr-fr': "Feuillajou"
	},

	rarity: "None",
	hp: 70,
	types: ["Grass"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281779,
				tcgplayer: 87937
			}
		}
	]
}

export default card

