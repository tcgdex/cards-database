import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Azelf",
		'fr-fr': "Créfadet",
	},

	illustrator: "chibi",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		482,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Shining Eyes",
				'fr-fr': "Yeux Brillants",
			},
			effect: {
				'en-us': "Put 2 damage counters on each of your opponent's Pokémon that has any damage counters on it.",
				'fr-fr': "Placez 2 marqueurs de dégâts sur chacun des Pokémon de votre adversaire ayant au moins un marqueur de dégâts.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mind Bend",
				'fr-fr': "Contrôleur d'Esprit",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is thought that Uxie, Mesprit, and Azelf all came from the same egg.",
	},

	thirdParty: {
		cardmarket: 291583
	}
}

export default card
