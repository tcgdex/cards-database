import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Petilil",
		'fr-fr': "Chlorobule",
		'es-es': "Petilil",
		'it-it': "Petilil",
		'pt-br': "Petilil",
		'de-de': "Lilminip"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	illustrator: "Mika Pikazo",

	attacks: [{
		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'es-es': "Bomba Germen",
			'it-it': "Semebomba",
			'pt-br': "Seed Bomb",
			'de-de': "Samenbomben"
		},

		damage: 20,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,

	description: {
		'en-us': "They prefer clean water and soil. When the environment they live in turns bad, the whole bunch will up and move to a new area."
	},

	dexId: [548],
	regulationMark: "E",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574033,
				tcgplayer: 246823
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574033,
				tcgplayer: 246823
			}
		},
	],
}

export default card
