import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Oddish",
		fr: "Mystherbe",
	},
	illustrator: "Yumi",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		43,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Sweet Scent",
				fr: "Doux Parfum",
			},
			effect: {
				en: "Heal 30 damage from 1 of your Pokémon.",
				fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
