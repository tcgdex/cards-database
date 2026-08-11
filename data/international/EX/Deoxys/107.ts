import { Card } from 'models/database/card'
import Set from '../Deoxys'

const card: Card = {
	name: {
		'en-us': "Rayquaza ☆",
		'fr-fr': "Rayquaza ☆",
		'de-de': "Rayquaza ☆"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Lightning",
			],
			name: {
				'en-us': "Spiral Rush",
				'fr-fr': "Course en spirale",
				'de-de': "Spiral Rush"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip a coin until you get tails. This attack does 30 damage times the number of heads."
			},
			damage: "30x",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Lightning",
			],
			name: {
				'en-us': "Holy Star",
				'fr-fr': "Étoile sacrée",
				'de-de': "Holy Star"
			},
			effect: {
				'en-us': "Discard all Energy cards attached to Rayquaza ☆. This attack does 100 damage to each of your opponent's Pokémon-ex. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez toutes les cartes Énergie attachées à Rayquaza ☆. Cette attaque inflige 100 dégâts à chacun des Pokémon-ex de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Discard all Energy cards attached to Rayquaza ☆. This attack does 100 damage to each of your opponent's Pokémon-ex. (Don't apply Weakness and Resistance for benched Pokémon.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fighting",
			value: "-30"
		},
	],


	retreat: 2,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 276425,
				tcgplayer: 88636
			},
		},
	],

}

export default card
