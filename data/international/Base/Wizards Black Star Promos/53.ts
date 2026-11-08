import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Suicune",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		245,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Pure Body",
			},
			effect: {
				'en-us': "To attach a Water Energy card from your hand to Suicune, you must discard an Energy card attached to Suicune. (Attach the Water Energy, and then discard an Energy card from Suicune.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hypno Wave",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 20 more damage. If tails, this attack does 30 damage and the Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["pokemon-4-ever"],
			thirdParty: {
				tcgplayer: 89601
			},
		}
	]
}

export default card
