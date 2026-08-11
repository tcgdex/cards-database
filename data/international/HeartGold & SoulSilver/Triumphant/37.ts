import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Lairon",
		'fr-fr': "Galegon",
		'de-de': "Stollrak"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [305],

	hp: 80,

	types: [
		"Metal"
	],

	evolveFrom: {
		'en-us': "Aron",
		'fr-fr': "Galekid"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Take Down",
				'fr-fr': "Bélier",
				'de-de': "Bodycheck"
			},
			effect: {
				'en-us': "Lairon does 20 damage to itself.",
				'fr-fr': "Galegon s’inflige 20 dégâts.",
				'de-de': "Stollrak fügt sich selbst 20 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It loves iron ore. Groups of them fight for territory by bashing one another with their steel bodies."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86583,
				cardmarket: 279567
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279567,
				tcgplayer: 86583
			}
		},
	],

}

export default card
