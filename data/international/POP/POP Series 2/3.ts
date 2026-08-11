import { Card } from 'models/database/card'
import Set from '../POP Series 2'

const card: Card = {
	name: {
		'en-us': "Raikou",
		'fr-fr': "Raikou"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [243],

	hp: 70,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Roar",
				'fr-fr': "Hurlement"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
				'fr-fr': "Si votre adversaire a des Pokémon sur son Banc, il choisit l'un d'eux et l'échange contre le Pokémon Défenseur."
			},

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Thunder",
				'fr-fr': "Fatal-Foudre"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Raikou does 20 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Raikou s'inflige 20 dégâts."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88533,
				cardmarket: 277434
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88533,
				cardmarket: 277434
			},
		},
	],

}

export default card
