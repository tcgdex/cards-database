import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",

	dexId: [496],

	description: {
		'en-us': "They avoid attacks by sinking into the shadows of thick foliage. They retaliate with masterful whipping techniques."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Wrap",
			'fr-fr': "Ligotage"
		},

		damage: 20,

		effect: {
			'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
			'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Paralysé."
		}
	}, {
		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge"
		},

		damage: 30
	}],

	name: {
		'en-us': "Servine",
		'fr-fr': "Lianaja"
	},

	rarity: "None",
	hp: 80,
	types: ["Grass"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281778,
				tcgplayer: 89081
			}
		}
	]
}

export default card

