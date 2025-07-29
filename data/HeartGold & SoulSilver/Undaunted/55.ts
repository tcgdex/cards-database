import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Makuhita",
		fr: "Makuhita",
		de: "Makuhita"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		296,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Slap Down",
				fr: "Écraser",
				de: "Niederschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage plus 10 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque côté face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 20 Schadenspunkte plus 10 weitere Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slap Push",
				fr: "Gifle",
				de: "Stoß"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It toughens up by slamming into thick trees over and over. It gains a sturdy body and dauntless spirit."
	},

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 279308
	}
}

export default card
