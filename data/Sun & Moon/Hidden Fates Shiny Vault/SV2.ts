import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Rowlet",
		fr: "Brindibou",
		de: "Bauz"
	},
	illustrator: "sui",
	rarity: "Shiny rare",
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
}

export default card
