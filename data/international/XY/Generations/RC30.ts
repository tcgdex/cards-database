import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Gardevoir EX",
		'fr-fr': "Gardevoir-EX",
	},

	illustrator: "Mizue",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		282,
	],

	hp: 170,

	types: [
		"Fairy",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Life Leap",
				'fr-fr': "Projection Vitale",
			},
			effect: {
				'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon.",
				'fr-fr': "Soignez à ce Pokémon la même quantité de dégâts que vous avez infligée au Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Fairy",
			],
			name: {
				'en-us': "Shining Wind",
				'fr-fr': "Vent Étincelant",
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon has no Weakness.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 288539
	}
}

export default card
