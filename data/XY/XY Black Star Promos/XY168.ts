import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Garchomp-EX",
		fr: "M-Carchacrok-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		445,
	],
	hp: 210,
	types: [
		"Dragon",
	],
	evolveFrom: {
		en: "Garchomp-EX",
		fr: "Carchacrok-EX"
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Water",
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Crimson Edge",
				fr: "Tranchant Écarlate"
			},
			effect: {
				en: "This Pokémon does 10 damage to itself for each damage counter on it.",
				fr: "Ce Pokémon s'inflige 10 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon."
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],





}

export default card
