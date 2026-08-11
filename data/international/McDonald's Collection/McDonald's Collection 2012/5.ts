import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2012'

const card: Card = {
	set: Set,
	illustrator: "Masakazu Fukuda",
	category: "Pokemon",

	dexId: [502],

	description: {
		'en-us': "Scalchop techniques differ from one Dewott to another. It never neglects maintaining its scalchops."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O"
		},

		damage: 30
	}, {
		name: {
			'en-us': "Razor Shell",
			'fr-fr': "Coquilame"
		},

		damage: "40+",

		effect: {
			'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
			'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
		}
	}],

	name: {
		'en-us': "Dewott",
		'fr-fr': "Mateloutre"
	},

	rarity: "None",
	hp: 90,
	types: ["Water"],

	variants: [
		{
			type: 'holo',
			stamp: ["mcdonalds"],

			thirdParty: {
				cardmarket: 281782,
				tcgplayer: 84797
			}
		}
	]
}

export default card

