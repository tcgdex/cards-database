import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Meowstic",
		'fr-fr': "Mistigrix",
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		678,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Ear Influence",
				'fr-fr': "Influence Otique",
			},
			effect: {
				'en-us': "Move as many damage counters on your opponent's Pokémon as you like to any of your opponent's other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant de marqueurs de dégâts que vous voulez des Pokémon de votre adversaire vers les autres Pokémon de votre adversaire, de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Psychic",
			],
			name: {
				'en-us': "Psychic",
				'fr-fr': "Psyko",
			},
			effect: {
				'en-us': "This attack does 10 more damage for each Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Actif de votre adversaire.",
			},
			damage: "60+",

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
		'en-us': "Intense silence. Two lamplights. Keep waiting for night to end.",
	},

	thirdParty: {
		cardmarket: 288475
	}
}

export default card
