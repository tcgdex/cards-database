import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Heatmor",
		'fr-fr': "Aflamanoir",
		'es-es': "Heatmor",
		'it-it': "Heatmor",
		'pt-br': "Heatmor",
		'de-de': "Furnifraß"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
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
				"Fire",
			],
			name: {
				'en-us': "Singe",
				'fr-fr': "Roussi",
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Incinerate",
				'fr-fr': "Calcination",
			},
			effect: {
				'en-us': "Before doing damage, discard a Pokémon Tool card attached to the Defending Pokémon.",
				'fr-fr': "Avant d'infliger des dégâts, défaussez une carte Outil Pokémon attachée au Pokémon Défenseur.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Using their very hot, flame-covered tongues, they burn through Durant's steel bodies and consume their insides.",
	},

	thirdParty: {
		cardmarket: 280141,
		tcgplayer: 86044
	}
}

export default card
