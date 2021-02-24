import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty",
	},
	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		300,
	],
	hp: 50,
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
				en: "Heal Bell",
				fr: "Glas de Soin",
			},
			effect: {
				en: "Heal 10 damage from each of your Pokémon.",
				fr: "Soignez 10 dégâts à chacun de vos Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Whap",
				fr: "Queue Battoir",
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
