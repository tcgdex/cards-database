import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Corphish",
		'fr-fr': "Écrapince de Team Aqua",
		'de-de': "Team Aquas Krebscorps"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [341],

	hp: 40,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Toxic Grip",
				'fr-fr': "Pince empoisonnée",
				'de-de': "Toxic Grip"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275827,
				tcgplayer: 89781
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275827,
				tcgplayer: 89781
			}
		},
	],

}

export default card
