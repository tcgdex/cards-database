import { Card } from '../../../interfaces'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		en: "Arceus",
	},
	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		493,
	],
	hp: 120,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Multitype",
			},
			effect: {
				en: "Arceus LV.X's type is the same type as its previous Level.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Meteor Blast",
			},
			effect: {
				en: "Flip a coin. If tails, this attack's base damage is 50 instead of 100.",
			},
			damage: 100,

		},
	],






}

export default card
