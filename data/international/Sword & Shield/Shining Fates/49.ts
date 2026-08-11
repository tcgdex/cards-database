import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [878],
	set: Set,

	name: {
		'fr-fr': "Charibari",
		'en-us': "Cufant",
		'es-es': "Cufant",
		'it-it': "Cufant",
		'pt-br': "Cufant",
		'de-de': "Kupfanti"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	attacks: [{
		name: {
			'fr-fr': "Force",
			'en-us': "Strength",
			'es-es': "Fuerza",
			'it-it': "Forza",
			'pt-br': "Força",
			'de-de': "Stärke"
		},

		damage: 60,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It digs up the ground with its trunk. It's also very strong, being able to carry loads of over five tons without any problem at all."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 539268,
				tcgplayer: 232523
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 539268,
				tcgplayer: 232523
			}
		},
	],
}

export default card
