import { Card } from 'models/database/card'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "Ken Sugimori",
	category: "Pokemon",

	dexId: [570],

	description: {
		'en-us': "It changes into the forms of others to surprise them. Apparently, it often transforms into a silent child."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe"
		},

		damage: 10
	}, {
		name: {
			'en-us': "Fury Swipes",
			'fr-fr': "Combo-Griffe"
		},

		damage: "10×",

		effect: {
			'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
			'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face."
		}
	}],

	name: {
		'en-us': "Zorua",
		'fr-fr': "Zorua"
	},

	rarity: "None",
	hp: 50,
	types: ["Darkness"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281798,
				tcgplayer: 90758
			}
		}
	]
}

export default card

