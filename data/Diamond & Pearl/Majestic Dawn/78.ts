import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Turtwig",
		fr: "Tortipouss",
		de: "Chelast"
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
			fr: "Baie Kika",
			de: 'Persimbeere'
		},
		effect: {
			fr: "Si Tortipouss est Confus, retirez-lui l'État Spécial Confus à la fin du tour de chaque joueur.",
			de: 'Wenn Chelast verwirrt ist, entferne am Ende jedes Zuges den Speziellen Zustand \'verwirrt\' von Chelast.'
		}
	},

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: 'Biss'
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
		cardmarket: 278126
	}
}

export default card
