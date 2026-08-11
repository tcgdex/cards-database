import { Card } from 'models/database/card'
import Set from '../Unleashed'

const card: Card = {
	name: {
		'en-us': "Raikou & Suicune LEGEND",
		'fr-fr': "Raikou & Suicune LÉGENDE (bas)",
		'de-de': "Raikou & Suicune LEGENDE"
	},

	illustrator: "Shinji Higuchi + Noriko Takaya",
	rarity: "LEGEND",
	category: "Pokemon",
	set: Set,

	dexId: [243],
	hp: 160,

	types: [
		"Lightning",
		"Water"
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
				'en-us': "Thunderbolt Spear",
				'fr-fr': "Lance de tonnerre",
				'de-de': "Blitzspeer"
			},
			effect: {
				'en-us': "Raikou & Suicune LEGEND does 50 damage to itself and don't apply Weakness to this damage.",
				'fr-fr': "Raikou & Suicune LÉGENDE s'infligent 50 dégâts. N'appliquez pas la Faiblesse à ces dégâts.",
				'de-de': "Raikou & Suicune-LEGENDE fügt sich selbst 50 Schadenspunkte zu; wende dabei Schwäche nicht an."
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
				'en-us': "Aurora Gain",
				'fr-fr': "Puissance boréale",
				'de-de': "Aurora-Verstärkung"
			},
			effect: {
				'en-us': "Remove 5 damage counters from Raikou & Suicune LEGEND.",
				'fr-fr': "Retirez 5 marqueurs de dégât à Raikou & Suicune LÉGENDE.",
				'de-de': "Entferne 5 Schadensmarken von Raikou & Suicune-LEGENDE."
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
			type: "holo",
			thirdParty: {
				cardmarket: 279248,
				tcgplayer: 88538,
			}
		},
	],
}

export default card
