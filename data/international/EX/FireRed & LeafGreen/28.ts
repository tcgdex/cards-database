import { Card } from 'models/database/card'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		'en-us': "Primeape",
		'fr-fr': "Colossinge",
		'de-de': "Rasaff"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		57,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Toss",
				'fr-fr': "Pile ou face",
				'de-de': "Toss"
			},
			effect: {
				'en-us': "You may discard from your hand as many Technical Machine and Pokémon Tool cards as you like. This attack does 30 damage times the number of cards you discarded.",
				'fr-fr': "Vous pouvez défausser de votre main autant de cartes Machine technique et Outil Pokémon que vous voulez. Cette attaque inflige 30 dégâts multipliés par le nombre de cartes défaussées.",
				'de-de': "You may discard from your hand as many Technical Machine and Pokémon Tool cards as you like. This attack does 30 damage times the number of cards you discarded."
			},
			damage: "30x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Low Kick",
				'fr-fr': "Balayage",
				'de-de': "Low Kick"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],


	retreat: 0,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 276204,
				tcgplayer: 88362
			},
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 276204,
				tcgplayer: 88362
			},
		}
	]
}

export default card
