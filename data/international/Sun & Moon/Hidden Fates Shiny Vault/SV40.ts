import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Garchomp",
		'fr-fr': "Carchacrok",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 150,
	types: [
		"Dragon",
	],
	evolveFrom: {
		'en-us': "Gabite",
		'fr-fr': "Carmache",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Quick Dive",
				'fr-fr': "Plongeon Rapide",
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Royal Blades",
				'fr-fr': "Lames Royales",
			},
			effect: {
				'en-us': "If you played Cynthia from your hand during this turn, this attack does 100 more damage.",
				'fr-fr': "Si vous avez joué Cynthia de votre main pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],






	description: {
		'en-us': "The protuberances on its head serve as sensors. It can even detect distant prey.",
	},
}

export default card
