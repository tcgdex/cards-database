import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre",
		'de-de': "Bisasam"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		1,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Sleep Poison",
				'fr-fr': "Poison dodo",
				'de-de': "Sleep Poison"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi et Empoisonné.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Asleep and Poisoned."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],

			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'herbe",
				'de-de': "Razor Leaf"
			},

			damage: 20
		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276230,
				tcgplayer: 84029
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276230,
				tcgplayer: 84029
			},
		},
	],
}

export default card
