import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Oddish",
		fr: "Mystherbe",
		de: "Myrapla"
	},

	illustrator: "Masako Yamashita"Big Mama" Tagawa",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [43],

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
				en: "Tackle",
				fr: "Charge",
				de: "Tackle"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Sleep Seed",
				fr: "Graine dodo",
				de: "Schlafsamen"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
				fr: "Le Pokémon Défenseur est maintenant Endormi.",
				de: "Das Verteidigende Pokémon schläft jetzt."
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
			type: "normal",
			thirdParty: {
				tcgplayer: 87840,
				cardmarket: 274997
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87840,
				cardmarket: 274997
			},
		},
	],
}

export default card
