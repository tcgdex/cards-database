import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "MAHOU",
	category: "Pokemon",

	dexId: [531],

	description: {
		'en-us': "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Double Slap",
			'fr-fr': "Torgnoles"
		},

		damage: "30×",

		effect: {
			'en-us': "Flip 2 coins. This attack does 30 damage times the number of heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face."
		}
	}],

	name: {
		'en-us': "Audino",
		'fr-fr': "Nanméouïe"
	},

	rarity: "None",
	hp: 80,
	types: ["Colorless"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281801,
				tcgplayer: 83660
			}
		}
	]
}

export default card

