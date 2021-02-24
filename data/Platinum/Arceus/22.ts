import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Manectric",
	},
	illustrator: "Mana Ibe",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],

	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electrike",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Second Bite",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each damage counter on the Defending Pokémon.",
			},
			damage: "20+",

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Swift",
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
