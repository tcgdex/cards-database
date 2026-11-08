import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Hariyama",
		'de-de': "Hariyama"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [297],
	
	hp: 110,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Makuhita"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Push Out",
				'de-de': "Verdrängen"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 50,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vortex Chop",
				'de-de': "Wirbelsturm-Schlag"
			},
			effect: {
				'en-us': "If the Defending Pokémon has any Resistance, this attack's base damage is 120 instead of 60.",
				'de-de': "Wenn das Verteidigende Pokémon mindestens eine Resistenz hat, beträgt der Grundschaden dieses Angriffs 120 Schadenspunkte anstelle von 60 Schadenspunkten."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],

	retreat: 4,

	description: {
		'en-us': "It loves to match power with big-bodied Pokémon. It can knock a truck flying with its arm thrusts."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86015,
				cardmarket: 278892
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278892,
				tcgplayer: 86015
			}
		},
	],

}

export default card
