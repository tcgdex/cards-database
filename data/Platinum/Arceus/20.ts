import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Hariyama",
		de: "Hariyama"
	},

	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		297,
	],
	
	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Makuhita",
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
				en: "Push Out",
				de: "Verdrängen"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				de: "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
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
				en: "Vortex Chop",
				de: "Wirbelsturm-Schlag"
			},
			effect: {
				en: "If the Defending Pokémon has any Resistance, this attack's base damage is 120 instead of 60.",
				de: "Wenn das Verteidigende Pokémon mindestens eine Resistenz hat, beträgt der Grundschaden dieses Angriffs 120 Schadenspunkte anstelle von 60 Schadenspunkten."
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

	thirdParty: {
		cardmarket: 278892,
		tcgplayer: 86015
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
