import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Celebi ex",
		'fr-fr': "Celebi ex",
		'de-de': "Celebi ex"
	},

	suffix: "ex",
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		251,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Spiral Leaf",
				'fr-fr': "Feuille-spirale",
				'de-de': "Spiral Leaf"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put 1 damage counter on each of your opponent's Pokemon. If tails, remove 1 damage country for each of your Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, placez 1 marqueur de dégât sur chacun des Pokémon de votre adversaire. Si c'est pile, retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				'de-de': "Flip a coin. If heads, put a damage counter on each of your opponent's Pokémon. If tails, remove 1 damage counter from each of your Pokémon."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Time Trap",
				'fr-fr': "Piège temporel",
				'de-de': "Time Trap"
			},
			effect: {
				'en-us': "Flip a coin. If heads, look at the top 4 cards of your opponent's deck, and put them back on top of your opponent's deck in any order. If tails, look at the top 4 cards of your deck, and put them back on top of your deck in any order.",
				'fr-fr': "Lancez une pièce. Si c'est face, regardez les 4 cartes du dessus du deck de votre adversaire et replacez-les au dessus du deck dans n'importe quel ordre. Si c'est pile, regardez les 4 cartes du dessus de votre deck et replacez-les au dessus de votre deck dans n'importe quel ordre.",
				'de-de': "Flip a coin. If heads, look at the top 4 cards of your opponent's deck, and put them back on top of your opponent's deck in any order. If tails, look at the top 4 cards of your deck, and put them back on top of your deck in any order."
			},
			damage: 30,

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
			type: "holo",
			thirdParty: {
				tcgplayer: 84150,
				cardmarket: 276763
			},
		},
	],
}

export default card
