import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
		'es-es': "Rufflet",
		'it-it': "Rufflet",
		'pt-br': "Rufflet",
		'de-de': "Geronimatz"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		627,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Incessant Peck",
				'fr-fr': "Rafal'Bec",
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 20 more damage for each heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It stands up to massive opponents, not out of courage, but out of recklessness. But that is how it gets stronger.",
	},

	thirdParty: {
		cardmarket: 280855,
		tcgplayer: 88844
	}
}

export default card
