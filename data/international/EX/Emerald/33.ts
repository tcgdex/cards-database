import { Card } from 'models/database/card'
import Set from '../Emerald'

const card: Card = {
	name: {
		'en-us': "Kirlia",
		'fr-fr': "Kirlia",
		'de-de': "Kirlia"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		281,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psypunch",
				'fr-fr': "Coup de poing psy",
				'de-de': "Psypunch"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Shock",
				'fr-fr': "Choc cérébral",
				'de-de': "Mind Shock"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by Weakness or Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
				'de-de': "This attack's damage isn't affected by Weakness or Resistance."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		tcgplayer: 86462,
		cardmarket: 276544
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86462,
				cardmarket: 276544
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86462,
				cardmarket: 276544
			},
		}
	],
}

export default card
