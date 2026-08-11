import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Nidoran ♀",
		'de-de': "Nidoran W"
	},
	illustrator: "Masako Yamashita",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [29],
	hp: 50,
	types: [
		"Grass"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Sting",
				'de-de': "Giftstachel"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'de-de': "Das verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 10,

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
				tcgplayer: 87716,
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87716,
			},
		},
	],
}

export default card
