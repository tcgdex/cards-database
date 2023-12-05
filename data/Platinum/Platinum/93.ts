import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty",
		de: "Eneco"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		300,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{

			name: {
				en: "Heal Bell",
				fr: "Glas de soin",
				de: "Heal Bell"
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
				de: "Remove 1 damage counter from each of your Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
				de: "Take Down"
			},
			effect: {
				en: "Skitty does 10 damage to itself.",
				fr: "Skitty s'inflige 10 dégâts.",
				de: "Skitty does 10 damage to itself."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
