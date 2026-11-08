import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Sneasel",
		'fr-fr': "Farfuret",
		'de-de': "Sniebel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		215,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fury Swipes",
				'fr-fr': "Combo-griffe",
				'de-de': "Fury Swipes"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 10 damage times the number of heads.",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip 3 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10x",

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Beat Up",
				'fr-fr': "Baston",
				'de-de': "Beat Up"
			},
			effect: {
				'en-us': "Flip a coin for each of your Pokémon in play (including this one). This attack does 20 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chacun de vos Pokémon en jeu (y compris celui-là). Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
				'de-de': "Flip a coin for each of your Pokémon in play (including this one). This attack does 20 damage times the number of heads."
			},
			damage: "20x",

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		'en-us': "Its paws conceal sharp claws. If attacked, it suddenly extends the claws and startles its enemy.",
		'fr-fr': "Ses pattes cachent des griffes aiguisées. S'il est attaqué, il sort ses griffes et transperce son ennemi."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274425,
				tcgplayer: 89367
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274425,
				tcgplayer: 89367
			}
		}
	]
}

export default card
