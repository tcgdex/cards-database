import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2021'

const card: Card = {
	name: {
		en: "Rowlet",
		fr: "Brindibou",
		de: "Bauz"
	},

	illustrator: "Megumi Mizutani",
	rarity: "None",
	category: "Pokemon",
	set: Set,

	dexId: [
		722,
	],

	hp: 60,

	types: [
		"Grass",
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
				en: "Leafage",
				fr: "Feuillage",
				de: "Blattwerk"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "This wary Pokémon uses photosynthesis to store up energy during the day, while becoming active at night.",
		de: "Ein wachsames und nachtaktives Pokémon. Tagsüber sammelt es per Photosynthese Kräfte, um fit für die Nacht zu sein."
	},

	variants: [
		{
			type: 'normal',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538838,
				tcgplayer: 232322
			}
		},
		{
			type: 'holo',
			stamp: ["25th-celebration"],

			thirdParty: {
				cardmarket: 538843,
				tcgplayer: 232322
			}
		}
	]
}

export default card

