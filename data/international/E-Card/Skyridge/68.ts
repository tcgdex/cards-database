import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [39],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nap",
				'de-de': "Nickerchen"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Jigglypuff.",
				'de-de': "Entferne eine Schadensmarke von Pummeluff."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lullaby",
				'de-de': "Wiegenlied"
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
				tcgplayer: 86313,
				cardmarket: 275326
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86313,
				cardmarket: 275326
			},
		},
	],
}

export default card
