import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Golbat",
		de: "Golbat"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		42,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Zubat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Sound Wave",
				de: "Gift-Schallwelle"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Poisoned.",
				de: "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt. Bei 'Zahl' ist das verteidigende Pokémon jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Strength in Numbers",
				de: "Stärke durch Überzahl"
			},
			effect: {
				en: "This attack does 30 damage plus 10 more damage for each Zubat, Golbat, and Crobat on your bench.",
				de: "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Zubat, Golbat bzw. Iksbat, das auf deiner Bank ist, zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275318
	}
}

export default card
