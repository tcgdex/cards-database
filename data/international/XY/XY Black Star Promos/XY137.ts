import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Vivillon",
		'fr-fr': "Prismillon",
	},

	illustrator: "match",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		666,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Spewpa",
		'fr-fr': "Pérégrain",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dizzying Poison",
				'fr-fr': "Poison Étourdissant",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Confused and Poisoned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus et Empoisonné.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Powder",
				'fr-fr': "Nuée de Poudre",
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Fire Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Fire attachée au Pokémon Actif de votre adversaire.",
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The patterns on this Pokémon's wings depend on the climate and topography of its habitat. It scatters colorful scales.",
	},

	thirdParty: {
		cardmarket: 290106
	}
}

export default card
