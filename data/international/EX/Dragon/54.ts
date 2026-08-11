import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'de-de': "Krebscorps"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [341],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
				'de-de': "Verprügler"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Toxic Grip",
				'fr-fr': "Pince empoisonnée",
				'de-de': "Giftiger Griff"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84431,
				cardmarket: 275931
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84431,
				cardmarket: 275931
			},
		},
	],

}

export default card
