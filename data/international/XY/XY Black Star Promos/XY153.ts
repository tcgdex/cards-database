import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ho Oh",
		'fr-fr': "Ho-Oh",
	},
	illustrator: "You Iribi",
	rarity: "Promo",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 120,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stoke",
				'fr-fr': "Attisement",
			},
			effect: {
				'en-us': "Flip a coin. If heads, search your deck for up to 2 Fire Energy cards and attach them to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Lancez une pièce. Si c'est face, cherchez jusqu'à 2 cartes Énergie Fire dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Wing",
				'fr-fr': "Aile de Feu",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,




	description: {
		'en-us': "It will reveal itself before a pure-hearted Trainer by shining its bright, rainbow-colored wings.",
	},
}

export default card
