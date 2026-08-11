import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Gulpin",
		'de-de': "Schluppuck"
	},

	illustrator: "Sachiko Adachi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [316],
	
	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Endure",
				'de-de': "Ausdauer"
			},
			effect: {
				'en-us': "Flip a coin. If heads, during your opponent's next turn, if Gulpin would be Knocked Out by damage from an attack, Gulpin is not Knocked Out and its remaining HP becomes 10 instead.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" wird Schluppuck, wenn es im nächsten Zug deines Gegners durch Schaden eines Angriffs kampfunfähig würde, nicht kampfunfähig und hat stattdessen 10 verbliebene KP."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Pound",
				'de-de': "Pfund"
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

	description: {
		'en-us': "Almost all of its body is its stomach. Its harsh digestive juices quickly dissolve anything it swallows."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85978,
				cardmarket: 278912
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278912,
				tcgplayer: 85978
			}
		},
	],

}

export default card
