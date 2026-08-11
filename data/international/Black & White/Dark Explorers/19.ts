import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		631,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hot Lick",
				'fr-fr': "Léchouille Ardente"
			},
			effect: {
				'en-us': "If the Defending Pokémon is Durant, this attack does 50 more damage.",
				'fr-fr': "Si le Pokémon Défenseur est Fermite, cette attaque inflige 50 dégâts supplémentaires."
			},
			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Firebreathing",
				'fr-fr': "Souffle-Feu"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Using their very hot, flame-covered tongues, they burn through Durant's steel bodies and consume their insides.",
	},

	thirdParty: {
		cardmarket: 280347,
		tcgplayer: 86045
	}
}

export default card
