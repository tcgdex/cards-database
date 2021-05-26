import { Card } from '../../../interfaces'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		en: "Rampardos",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		409,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Cherrim",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Assurance",
			},
			effect: {
				en: "As long as the Defending Pokémon's remaining HP is 60 or less, this attack's base damage is 60 instead of 30.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Hasty Headbutt",
			},
			effect: {
				en: "Rampardos does 20 damage to itself. This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "+30"
		},
	],





}

export default card
