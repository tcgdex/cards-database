import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Teddiursa",
		'fr-fr': "Teddiursa",
		'es-es': "Teddiursa",
		'it-it': "Teddiursa",
		'pt-br': "Teddiursa",
		'de-de': "Teddiursa"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	illustrator: "Mizue",

	attacks: [{
		name: {
			'en-us': "Scratch",
			'fr-fr': "Griffe",
			'es-es': "Arañazo",
			'it-it': "Graffio",
			'pt-br': "Scratch",
			'de-de': "Kratzer"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	dexId: [216],

	description: {
		'en-us': "Before food becomes scarce in wintertime, its habit is to hoard food in many hidden locations."
	},

	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574180,
				tcgplayer: 246848
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574180,
				tcgplayer: 246848
			}
		},
	],
}

export default card
