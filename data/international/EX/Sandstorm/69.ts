import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Natu",
		'fr-fr': "Natu",
		'de-de': "Natu"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [177],

	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic",
				'de-de': "Peck"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Soothing Wave",
				'fr-fr': "Vague relaxante",
				'de-de': "Soothing Wave"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Asleep.",
				'fr-fr': "Chaque Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Each Defending Pokémon is now Asleep."
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
				cardmarket: 275846,
				tcgplayer: 87682
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275846,
				tcgplayer: 87682
			}
		},
		{
			type: "normal",
			subtype: "no-e-reader",
			thirdParty: {
				tcgplayer: 125152
			}
		},
	],

}

export default card
