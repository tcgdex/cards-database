import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Doduo",
		'fr-fr': "Doduo",
		'de-de': "Dodu"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [84],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Doduo does 10 damage to itself.",
				'fr-fr': "Doduo s'inflige 10 dégâts.",
				'de-de': "Dodu fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	description: {
		'en-us': "The brains in its two heads appear to communicate emotions to each other with a telepathic power."
	},

	retreat: 0,
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84864,
				cardmarket: 278793
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278793,
				tcgplayer: 84864
			}
		},
	],

}

export default card
