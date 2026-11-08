import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Slowpoke",
		'fr-fr': "Ramoloss",
		'de-de': "Flegmon"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Confusion Wave",
				'fr-fr': "Vague de confusion",
				'de-de': "Confusing Wave"
			},
			effect: {
				'en-us': "Both Slowpoke and the Defending Pokémon are now Confused.",
				'fr-fr': "Ramoloss et le Pokémon Défenseur sont maintenant Confus.",
				'de-de': "Both Slowpoke and the Defending Pokémon are now Confused"
			},

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276256,
				tcgplayer: 89327
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276256,
				tcgplayer: 89327
			},
		},
	],
}

export default card
