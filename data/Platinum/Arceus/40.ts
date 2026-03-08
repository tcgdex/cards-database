import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Gulpin",
		de: "Schluppuck"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		316,
	],
	
	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Endure",
				de: "Ausdauer"
			},
			effect: {
				en: "Flip a coin. If heads, during your opponent's next turn, if Gulpin would be Knocked Out by damage from an attack, Gulpin is not Knocked Out and its remaining HP becomes 10 instead.",
				de: "Wirf 1 Münze. Bei \"Kopf\" wird Schluppuck, wenn es im nächsten Zug deines Gegners durch Schaden eines Angriffs kampfunfähig würde, nicht kampfunfähig und hat stattdessen 10 verbliebene KP."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Pound",
				de: "Pfund"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 278912,
		tcgplayer: 85978
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
