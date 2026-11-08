import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Corphish",
		'fr-fr': "Écrapince de Team Aqua",
		'de-de': "Team Aquas Krebscorps"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Uncommon",
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
				"Colorless",
			],
			name: {
				'en-us': "Double Pinchers",
				'fr-fr': "Doubles pinces",
				'de-de': "Double Pinchers"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dark Poison",
				'fr-fr': "Sombre poison",
				'de-de': "Dark Poison"
			},
			effect: {
				'en-us': "Discard a basic Energy card attached to Team Aqua's Corphish or this attack does nothing. The Defending Pokémon is now Poisoned.",
				'fr-fr': "Défaussez une carte Énergie de base attachée à Écrapince de Team Aqua ou cette attaque est sans effet. Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Discard a basic Energy card attached to Team Aqua's Corphish or this attack does nothing. The Defending Pokémon is now Poisoned."
			},
			damage: 20,

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
				cardmarket: 275803,
				tcgplayer: 89780
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275803,
				tcgplayer: 89780
			}
		},
	],

}

export default card
