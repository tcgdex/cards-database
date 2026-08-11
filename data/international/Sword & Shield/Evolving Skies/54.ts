import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Mareep",
		'fr-fr': "Wattouat",
		'es-es': "Mareep",
		'it-it': "Mareep",
		'pt-br': "Mareep",
		'de-de': "Voltilamm"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	illustrator: "Yukiko Baba",

	attacks: [{
		name: {
			'en-us': "Rear Kick",
			'fr-fr': "Ruade",
			'es-es': "Patada Trasera",
			'it-it': "Retrocalcio",
			'pt-br': "Rear Kick",
			'de-de': "Rückwärtskick"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			'en-us': "Electro Ball",
			'fr-fr': "Boule Élek",
			'es-es': "Bola Voltio",
			'it-it': "Energisfera",
			'pt-br': "Electro Ball",
			'de-de': "Elektroball"
		},

		damage: 30,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "Rubbing its fleece generates electricity. You'll want to pet it because it's cute, but if you use your bare hand, you'll get a painful shock."
	},

	dexId: [179],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574078,
				tcgplayer: 246895
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574078,
				tcgplayer: 246895
			}
		},
	],
}

export default card
