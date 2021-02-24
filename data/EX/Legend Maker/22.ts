import { Card } from '../../../interfaces'
import Set from '../Legend Maker'

const card: Card = {
	name: {
		en: "Magneton",
	},
	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Reactive Recharge",
			},
			effect: {
				en: "If Magneton would be Knocked Out by damage from an opponent's attack, you may move any number of React Energy cards from Magneton to your Pokémon in any way you like.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Multiple Force",
			},
			effect: {
				en: "If Magneton has any React Energy cards attached to it, this attack does 30 damage plus 10 more damage for each Magnemite and Magneton (both yours and your opponent's) in play.",
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Magnetic Blast",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
