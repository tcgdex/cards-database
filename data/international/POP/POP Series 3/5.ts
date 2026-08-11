import { Card } from 'models/database/card'
import Set from '../POP Series 3'

const card: Card = {
	name: {
		'en-us': "Plusle",
		'fr-fr': "Posipi"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [311],

	hp: 50,

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
				'en-us': "Cheer Up",
				'fr-fr': "Courage !"
			},
			effect: {
				'en-us': "Draw a card. If you have Minun in play, draw 2 cards instead.",
				'fr-fr': "Piochez une carte. Si vous avez Négapi en jeu, piochez 2 cartes à la place."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Positive Ion",
				'fr-fr': "Ion positif"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Body Bolt",
				'fr-fr': "« Boulon corporel »"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon that has any Poké-Bodies. This attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Choisissez 1 des Pokémon de votre adversaire qui a un Poké-Body. Cette attaque inflige 30 dégâts à ce Pokémon. (N'appliquez pas la Faiblesse et la Résistance aux Pokémon de Banc.)"
			}

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88167,
				cardmarket: 277453
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88167,
				cardmarket: 277453
			},
		},
	],

}

export default card
