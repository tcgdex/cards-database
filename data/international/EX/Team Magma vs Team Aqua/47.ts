import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Carvanha",
		'fr-fr': "Carvanha de Team Aqua",
		'de-de': "Team Aquas Kanivanha"
	},

	illustrator: "Yosuke Da Silva",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [318],

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
				'en-us': "Confuse Ray",
				'fr-fr': "Onde folie",
				'de-de': "Confuse Ray"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused."
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Poison Fang",
				'fr-fr': "Croc-poison",
				'de-de': "Poison Fang"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
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
				cardmarket: 275824,
				tcgplayer: 89777
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275824,
				tcgplayer: 89777
			}
		},
	],

}

export default card
