import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Xurkitree",
		'fr-fr': "Câblifère",
	},
	illustrator: "Naoki Saito",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		796,
	],
	hp: 120,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Dazzle Blast",
				'fr-fr': "Explosion de Lumière",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Cablegram",
				'fr-fr': "Câblogramme",
			},
			effect: {
				'en-us': "If you have exactly 3 Prize cards remaining, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "S’il vous reste exactement 3 cartes Récompense, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "It appeared from the Ultra Wormhole. It raided a power plant, so people think it energizes itself with electricity.",
	},
}

export default card
