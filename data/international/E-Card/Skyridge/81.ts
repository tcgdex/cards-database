import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Nidoran ♀",
		'de-de': "Nidoran W"
	},
	illustrator: "Midori Harada",
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
			],
			name: {
				'en-us': "Call for Family",
				'de-de': "Familie holen"
			},
			effect: {
				'en-us': "Search your deck for a Basic Pokémon card named Nidoran ♀ or Nidoran ♂ and put it onto your Bench. Shuffle your deck afterward. (You can't use this attack if your Bench is full.)",
				'de-de': "Durchsuche dein Deck nach einer Basis-Pokémonkarte mit dem Namen Nidoran W oder Nidoran M und lege sie auf deine Bank. Mische dein Deck danach. (Du kannst diesen Angriff nicht verwenden, wenn deine Bank voll ist.)"
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Scratch",
				'de-de': "Kratzer"
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
				tcgplayer: 87714,
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 87714,
			},
		},
	],
}

export default card
