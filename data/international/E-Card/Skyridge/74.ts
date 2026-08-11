import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Machop",
		'de-de': "Machollo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [66],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				'en-us': "Smash Punch",
				'de-de': "Schmetterschlag"
			},

			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'de-de': "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkung."
			},

			damage: 20,
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Fling",
				'de-de': "Austoben"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. (Do the damage before switching the Pokémon.)",
				'de-de': "Dein Gegner tauscht das verteidigende Pokémon mit 1 der Pokémon auf seiner Bank aus. (Füge die Schadenspunkte vor dem Austauschen der Pokémon zu.)"
			},
			damage: 20,

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
				tcgplayer: 86989,
				cardmarket: 275332
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86989,
				cardmarket: 275332
			},
		},
	],
}

export default card
