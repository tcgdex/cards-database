import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Sharpedo",
		'fr-fr': "Sharpedo de Team Aqua",
		'de-de': "Team Aquas Tohaido"
	},

	illustrator: "Katsura Tabata",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [319],

	hp: 70,

	types: [
		"Water"
	],

	stage: "Stage1",

	attacks: [
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
			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Aqua Smash",
				'fr-fr': "Aqua-choc",
				'de-de': "Aqua Smash"
			},
			effect: {
				'en-us': "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon is affected by a Special Condition, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],


	retreat: 0,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275795,
				tcgplayer: 89800
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275795,
				tcgplayer: 89800
			}
		},
	],

}

export default card
