import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Beedrill EX",
		'fr-fr': "Dardargnan-EX"
	},

	illustrator: "hatachu",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		15,
	],

	hp: 160,

	types: [
		"Grass",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Double Scrapper",
				'fr-fr': "Double Raclée"
			},
			effect: {
				'en-us': "Discard up to 2 Pokémon Tool cards attached to your opponent's Pokémon.",
				'fr-fr': "Défaussez jusqu'à 2 cartes Outil Pokémon attachées aux Pokémon de votre adversaire."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Pin Missile",
				'fr-fr': "Dard-Nuée"
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 40 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face."
			},
			damage: "40×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 291593
	}
}

export default card
