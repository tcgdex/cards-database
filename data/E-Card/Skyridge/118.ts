import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Zubat",
		de: "Zubat"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [41],

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
				en: "Wing Attack",
				de: "Flügelschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Spray",
				de: "Giftspray"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				de: "Das verteidigende Pokémon ist jetzt vergiftet."
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
				tcgplayer: 90769,
				cardmarket: 275376
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90769,
				cardmarket: 275376
			},
		},
	],
}

export default card
