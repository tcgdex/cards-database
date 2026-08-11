import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Arceus",
		'fr-fr': "Arceus",
	},

	illustrator: "Shin Nagasawa",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		493,
	],

	hp: 120,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gather Light",
				'fr-fr': "Lumière Collectée",
			},
			effect: {
				'en-us': "Move as many Energy as you like from your Benched Pokémon to this Pokémon.",
				'fr-fr': "Déplacez autant d'Énergies que vous voulez de vos Pokémon de Banc vers ce Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Judgment Blast",
				'fr-fr': "Explo-Jugement"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each different type of basic Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque type d'Énergie de base attaché à ce Pokémon."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It is told in mythology that this Pokémon was born before the universe even existed.",
	},

	thirdParty: {
		cardmarket: 289806
	}
}

export default card
