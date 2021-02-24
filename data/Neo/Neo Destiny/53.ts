import { Card } from '../../../interfaces'
import Set from '../Neo Destiny'

const card: Card = {
	name: {
		en: "Light Venomoth",
	},
	illustrator: "Masako Yamashita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		49,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Venonat",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Mysterious Wing",
			},
			effect: {
				en: "Your opponent may choose a Baby Pokémon, Basic Pokémon, or Evolution card from his or her discard pile and put it into his or her hand. Either way, you may do the same.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Synchronize",
			},
			effect: {
				en: "If Light Venomoth and the Defending Pokémon have a different number of Energy cards attached to them, this attack does nothing.",
			},
			damage: 40,

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
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
