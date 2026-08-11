import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Xerneas",
		'fr-fr': "Xerneas",
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		716,
	],

	hp: 130,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Aurora Gain",
				'fr-fr': "Puissance Boréale",
			},
			effect: {
				'en-us': "During your opponent's next turn, this Pokémon has no Weakness.",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon n'a pas de Faiblesse.",
			},
			damage: 50,

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Light of Life",
				'fr-fr': "Lumière de l'Existence",
			},
			effect: {
				'en-us': "If your opponent has Yveltal (including Yveltal-EX) in play, this attack does 40 more damage.",
				'fr-fr': "Si votre adversaire a Yveltal (y compris Yveltal-EX) en jeu, cette attaque inflige 40 dégâts supplémentaires.",
			},
			damage: "80＋",

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
			value: "−20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Legends say it can share eternal life. It slept for a thousand years in the form of a tree before its revival.",
	},

	thirdParty: {
		cardmarket: 552954
	}
}

export default card
