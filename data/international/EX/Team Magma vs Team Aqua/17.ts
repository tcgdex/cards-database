import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Aqua's Seviper",
		'fr-fr': "Seviper de Team Aqua",
		'de-de': "Team Aquas Vipitis"
	},

	illustrator: "Jungo Suzuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [336],

	hp: 80,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Call for Family",
				'fr-fr': "Appel à la famille",
				'de-de': "Call for Family"
			},
			effect: {
				'en-us': "Search your deck for a Grass Basic Pokémon or Basic Pokémon with Team Aqua in its name and put it onto your Bench. Shuffle your deck afterward.",
				'fr-fr': "Cherchez dans votre deck un Pokémon de base  ou un Pokémon de base dont le nom comporte Team Aqua et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a  Basic Pokémon or Basic Pokémon with Team Aqua in its name and put it onto your Bench. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thick Poison",
				'fr-fr': "Poison épais",
				'de-de': "Thick Poison"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned. If tails, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Confus et Empoisonné. Si c'est pile, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Confused and Poisoned. If tails, the Defending Pokémon is now Poisoned."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275794,
				tcgplayer: 89798
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275794,
				tcgplayer: 89798
			}
		},
	],

}

export default card
