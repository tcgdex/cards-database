import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Turtwig",
		'fr-fr': "Tortipouss",
		'de-de': "Chelast"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		387,
	],

	hp: 60,

	types: [
		"Grass",
	],

	stage: "Basic",

	item: {
		name: {
			'fr-fr': "Baie Kika",
			'de-de': 'Persimbeere'
		},
		effect: {
			'fr-fr': "Si Tortipouss est Confus, retirez-lui l'État Spécial Confus à la fin du tour de chaque joueur.",
			'de-de': 'Wenn Chelast verwirrt ist, entferne am Ende jedes Zuges den Speziellen Zustand \'verwirrt\' von Chelast.'
		}
	},

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': 'Biss'
			},
			damage: 30,

		}
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278126,
		tcgplayer: 90074
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["countdown-calendar"]
		}
	]
}

export default card
