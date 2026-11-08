import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Ivysaur",
		'fr-fr': "Herbizarre",
		'de-de': "Bisaknosp"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [2],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Bulbasaur",
		'fr-fr': "Bulbizarre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Seed",
				'fr-fr': "Graine dodo",
				'de-de': "Schlafsamen"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Vine Whip",
				'fr-fr': "Fouet lianes",
				'de-de': "Rankenhieb"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86296,
				cardmarket: 274957
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 86296,
				cardmarket: 274957
			},
		},
	],
}

export default card
