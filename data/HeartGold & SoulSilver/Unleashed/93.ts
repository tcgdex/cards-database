import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Raikou & Suicune LEGEND",
		fr: "Raikou & Suicune LÉGENDE (bas)",
	},

	illustrator: "Shinji Higuchi + Noriko Takaya",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		243,
	],

	hp: 160,

	types: [
		"Lightning",
		"Water",
	],

	suffix: "Legend",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunderbolt Spear",
				fr: "Lance de tonnerre",
			},
			effect: {
				en: "Raikou & Suicune LEGEND does 50 damage to itself, and don’t apply Weakness to this damage.",
				fr: "Raikou & Suicune LÉGENDE s'infligent 50 dégâts. N'appliquez pas la Faiblesse à ces dégâts.",
			},
			damage: 150,

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Aurora Gain",
				fr: "Puissance boréale",
			},
			effect: {
				en: "Remove 5 damage counters from Raikou & Suicune LEGEND.",
				fr: "Retirez 5 marqueurs de dégât à Raikou & Suicune LÉGENDE.",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	stage: "Basic"
}

export default card
