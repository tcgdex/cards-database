import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Raikou & Suicune LEGEND",
		fr: "Raikou & Suicune LÉGENDE (bas)",
		de: "Raikou & Suicune LEGENDE"
	},

	illustrator: "Shinji Higuchi + Noriko Takaya",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [
		243, // Raikou
		245, // Suicune
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
				de: "Blitzspeer"
			},
			effect: {
				en: "Raikou & Suicune LEGEND does 50 damage to itself, and don’t apply Weakness to this damage.",
				fr: "Raikou & Suicune LÉGENDE s'infligent 50 dégâts. N'appliquez pas la Faiblesse à ces dégâts.",
				de: "Raikou & Suicune-LEGENDE fügt sich selbst 50 Schadenspunkte zu; wende dabei Schwäche nicht an."
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
				de: "Aurora-Verstärkung"
			},
			effect: {
				en: "Remove 5 damage counters from Raikou & Suicune LEGEND.",
				fr: "Retirez 5 marqueurs de dégât à Raikou & Suicune LÉGENDE.",
				de: "Entferne 5 Schadensmarken von Raikou & Suicune-LEGENDE."
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
	stage: "Basic",

	variants: [
		{
			type: "holo"
		},
	],

	thirdParty: {
		cardmarket: 279248
	}
}

export default card
