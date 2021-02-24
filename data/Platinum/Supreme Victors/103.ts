import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		425,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Reckless Charge",
				fr: "Attaque imprudente",
			},
			effect: {
				en: "Drifloon does 10 damage to itself.",
				fr: "Baudrive s'inflige 10 dégâts.",
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
