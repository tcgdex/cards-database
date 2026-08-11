import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Golbat",
		'de-de': "Golbat"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [42],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Zubat",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Poison Sound Wave",
				'de-de': "Gift-Schallwelle"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused. If tails, the Defending Pokémon is now Poisoned.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' ist das verteidigende Pokémon jetzt verwirrt. Bei 'Zahl' ist das verteidigende Pokémon jetzt vergiftet."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Strength in Numbers",
				'de-de': "Stärke durch Überzahl"
			},
			effect: {
				'en-us': "This attack does 30 damage plus 10 more damage for each Zubat, Golbat, and Crobat on your Bench.",
				'de-de': "Dieser Angriff fügt 30 Schadenspunkte plus 10 weitere Schadenspunkte für jedes Zubat, Golbat bzw. Iksbat, das auf deiner Bank ist, zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85792,
				cardmarket: 275318
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85792,
				cardmarket: 275318
			},
		},
	],
}

export default card
