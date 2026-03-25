import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Raikou & Suicune LEGEND",
		fr: "Raikou & Suicune LÉGENDE (haut)",
		de: "Raikou & Suicune LEGENDE"
	},

	illustrator: "Shinji Higuchi + Noriko Takaya",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [243, 245],
	hp: 160,

	types: [
		"Lightning",
		"Water",
	],

	suffix: "Legend",
	stage: "Basic",
	retreat: 0,

	variants: [
		{
			type: "holo"
		},
	],

	attacks: [
		{
			name: {
				de: "Blitzspeer",
				fr: "Lance de tonnerre",
			},
			damage: 150,
			effect: {
				de: "Raikou & Suicune-LEGENDE fügt sich selbst 50 Schadenspunkte zu; wende dabei Schwäche nicht an.",
				fr: "Raikou & Suicune LÉGENDE s'infligent 50 dégâts (N'appliquez pas la Faiblesse à ces dégâts).",
			},
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
		},
		{
			name: {
				de: "Aurora-Verstärkung",
				fr: "Puissance boréale",
			},
			damage: 50,
			effect: {
				de: "Entferne 5 Schadensmarken von Raikou & Suicune-LEGENDE.",
				fr: "Retirez 5 marqueurs de dégât à Raikou & Suicune LÉGENDE.",
			},
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
		},
	],

	thirdParty: {
		cardmarket: 279248
	}
}

export default card
