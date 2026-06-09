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
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 0,

	variants: [
		{
			type: "holo"
		},
	],

	attacks: [{
		name: {
			en: "Thunderbolt Spear",
			de: "Blitzspeer"
		},

		damage: 150,

		effect: {
			en: "Raikou & Suicune LEGEND does 50 damage to itself and don't apply Weakness to this damage.",
			de: "Raikou & Suicune-LEGENDE fügt sich selbst 50 Schadenspunkte zu; wende dabei Schwäche nicht an."
		},

		cost: ["Lightning", "Lightning", "Colorless"]
	}, {
		name: {
			en: "Aurora Gain",
			de: "Aurora-Verstärkung"
		},

		damage: 50,

		effect: {
			en: "Remove 5 damage counters from Raikou & Suicune LEGEND.",
			de: "Entferne 5 Schadensmarken von Raikou & Suicune-LEGENDE."
		},

		cost: ["Water", "Colorless", "Colorless"]
	}],

	thirdParty: {
		cardmarket: 279248
	}
}

export default card
