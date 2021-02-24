import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Altaria",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		334,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Swablu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Safeguard",
			},
			effect: {
				en: "Prevent all effects of attacks, including damage, done to Altaria by your opponent's Pokémon-ex.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Double Wing Attack",
			},
			effect: {
				en: "Does 20 damage to each Defending Pokémon.",
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dive",
			},

			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
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
