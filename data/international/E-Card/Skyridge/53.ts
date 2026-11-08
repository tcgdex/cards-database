import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Dunsparce",
		'de-de': "Dummisel"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [206],

	hp: 40,

	types: [
		"Colorless"
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Slippery Skin",
				'de-de': "Glitschige Haut"
			},
			effect: {
				'en-us': "As long as the Defending Pokémon is an Evolved Pokémon, Dunsparce's Retreat Cost is 0.",
				'de-de': "Solange das verteidigende Pokémon ein entwickeltes Pokémon ist, betragen Dummisels Rückzugskosten 0."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Shake",
				'de-de': "Schweifwedeln"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'de-de': "Das verteidigende Pokémon schläft jetzt."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 85006,
				cardmarket: 275311
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 85006,
				cardmarket: 275311
			},
		},
	],
}

export default card
