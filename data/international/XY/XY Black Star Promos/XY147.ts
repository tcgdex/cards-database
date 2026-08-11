import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Hoopa",
		'fr-fr': "Hoopa",
	},

	illustrator: "Yoshinobu Saito",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 130,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hyperspace Punch",
				'fr-fr': "Poing Hyperespace",
			},
			effect: {
				'en-us': "This attack does 20 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Pitfall",
				'fr-fr': "Frappe Dimensionnelle",
			},
			effect: {
				'en-us': "This Pokémon can't use Pitfall during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Frappe Dimensionnelle pendant votre prochain tour.",
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is said to be able to seize anything it desires with its six rings and six huge arms. With its power sealed, it is transformed into a much smaller form.",
	},

	thirdParty: {
		cardmarket: 553491
	}
}

export default card
