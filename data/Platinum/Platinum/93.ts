import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty",
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
			},
			effect: {
				en: "Remove 1 damage counter from each of your Pokémon.",
				fr: "Retirez à chacun de vos Pokémon 1 marqueur de dégât.",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Take Down",
				fr: "Bélier",
			},
			effect: {
				en: "Skitty does 10 damage to itself.",
				fr: "Skitty s'inflige 10 dégâts.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+10"
		},
	],

	retreat: 1,



}

export default card
