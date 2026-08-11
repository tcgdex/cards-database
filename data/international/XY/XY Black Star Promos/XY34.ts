import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Metagross EX",
		'fr-fr': "Métalosse EX",
	},

	illustrator: "PLANETA",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		376,
	],

	hp: 180,

	types: [
		"Metal",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Magnetic Laser",
				'fr-fr': "Laser Magnétique",
			},
			effect: {
				'en-us': "You may move a Metal Energy from 1 of your Benched Pokémon to this Pokémon.",
				'fr-fr': "Vous pouvez déplacer une Énergie Metal de l'un de vos Pokémon de Banc vers ce Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Squared Attack",
				'fr-fr': "Attaque Carrée",
			},
			effect: {
				'en-us': "Flip 4 coins. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez 4 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
			},
			damage: "50×",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "−20"
		},
	],

	retreat: 4,

	thirdParty: {
		cardmarket: 289697
	}
}

export default card
