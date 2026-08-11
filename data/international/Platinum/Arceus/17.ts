import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Gengar",
		'de-de': "Gengar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [94],

	hp: 120,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Haunter"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Sharpshooting",
				'de-de': "Scharfschuss"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'de-de': "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 40 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Jab",
				'de-de': "Gifthieb"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+30"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	description: {
		'en-us': "The leer that floats in darkness belongs to a Gengar delighting in casting curses on people."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85678,
				cardmarket: 278888
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278888,
				tcgplayer: 85678
			}
		},
	],

	retreat: 0
}

export default card
