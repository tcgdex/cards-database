import { Card } from '../../../interfaces'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		de: "Trasla",
		en: "Ralts",
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		280,
	],

	hp: 40,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Hypnotic Gaze",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Pound",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "If its horns capture the warm feelings of people or Pokémon, its body warms up slightly.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 281143,
				tcgplayer: 88566
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 281143,
				tcgplayer: 88566
			}
		},
	],
}

export default card
