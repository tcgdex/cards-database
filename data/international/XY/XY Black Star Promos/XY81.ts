import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "White Kyurem",
		'fr-fr': "Kyurem Blanc",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hyper Beam",
				'fr-fr': "Ultralaser",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Flare Blizzard",
				'fr-fr': "Blizzard Flamboyant"
			},
			effect: {
				'en-us': "This Pokémon can't use Flare Blizzard during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Blizzard Flamboyant pendant votre prochain tour."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.",
	},

	thirdParty: {
		cardmarket: 289804
	}
}

export default card
