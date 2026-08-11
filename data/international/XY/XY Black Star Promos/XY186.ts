import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Magearna",
		'fr-fr': "Magearna"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		801,
	],

	hp: 90,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Entertain",
				'fr-fr': "Distraction"
			},
			effect: {
				'en-us': "Heal 40 damage from 1 of your Benched Pokémon.",
				'fr-fr': "Soignez 40 dégâts à l'un de vos Pokémon de Banc."
			},

		},
		{
			cost: [
				"Metal",
			],
			name: {
				'en-us': "Prismatic Wave",
				'fr-fr': "Onde Irisée"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of different types of Pokémon on your opponent's Bench.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de types de Pokémon différents sur le Banc de votre adversaire."
			},
			damage: 20,

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
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "Magearna, with its metallic body, is an artificial Pokémon created 500 years ago by humans.",
	},

	thirdParty: {
		cardmarket: 554053
	}
}

export default card
