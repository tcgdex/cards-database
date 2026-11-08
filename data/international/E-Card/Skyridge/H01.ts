import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Alakazam",
		'de-de': "Simsala"
	},

	illustrator: "Kimiya Masago",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [65],

	hp: 100,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Kadabra",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				'en-us': "Energy Jump",
				'de-de': "Energy Jump"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may move an Energy card from 1 of your Pokémon to another of your Pokémon. This power can't be used if Alakazam is affected by a Special Condition.",
				'de-de': "Once during your turn (before your attack), you may move an Energy card from 1 of your Pokémon to another of your Pokémon. This power can't be used if Alakazam is affected by a Special Condition."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Psychic",
				'de-de': "Psychic"
			},
			effect: {
				'en-us': "This attack does 30 damage plus 10 more damage for each Energy card attached to the Defending Pokémon.",
				'de-de': "This attack does 30 damage plus 10 more damage for each Energy card attached to the Defending Pokémon."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 83498,
				cardmarket: 275260
			},
		},
	],
}

export default card
