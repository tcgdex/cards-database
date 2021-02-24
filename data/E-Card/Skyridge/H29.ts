import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Steelix",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		208,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Onix",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rare Metal",
			},
			effect: {
				en: "All basic Energy cards attached to Steelix provide Metal Energy instead of their usual types.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Squeeze",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 10 more damage and the Defending Pokémon is now Paralyzed.",
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Tail",
			},
			effect: {
				en: "Before doing damage, you may flip a coin. If heads, this attack does 80 damage. If tails, this attack does nothing.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
