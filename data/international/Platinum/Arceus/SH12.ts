import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Shinx",
		'de-de': "Sheinux"
	},

	illustrator: "sui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [403],
	
	hp: 50,

	types: [
		"Lightning"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Star Barrier",
				'de-de': "Sternenbarriere"
			},
			effect: {
				'en-us': "As long as Shinx has any Energy attached to it, Shinx has no Weakness.",
				'de-de': "Solange an Sheinux mindestens 1 Energie angelegt ist, hat Sheinux keine Schwäche."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Payback",
				'de-de': "Gegenstoß"
			},
			effect: {
				'en-us': "If your opponent has only 1 Prize card left, this attack does 10 damage plus 30 more damage.",
				'de-de': "Wenn dein Gegner nur 1 Preis übrig hat, fügt dieser Angriff 10 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The extension and contraction of its muscles generates electricity. It glows when in trouble."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278872,
				tcgplayer: 89178
			}
		}
	]
}

export default card
