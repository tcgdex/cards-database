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
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slow-Acting Poison",
				'fr-fr': "Poison à effet retardé",
				'de-de': "Slow-Acting Poison"
			},
			effect: {
				'en-us': "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned.",
				'fr-fr': "À la fin du prochain tour de votre adversaire, le Pokémon Défenseur est Empoisonné.",
				'de-de': "At the end of your opponent's next turn, the Defending Pokémon is now Poisoned."
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


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275828,
				tcgplayer: 89782
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275828,
				tcgplayer: 89782
			}
		},
	],

}

export default card
