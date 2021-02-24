import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Venomoth",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Protective Dust",
			},
			effect: {
				en: "Prevent all effects of attacks, except damage, done to Venomoth by the Attacking Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Poison",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep and Poisoned.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Razor Wind",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
