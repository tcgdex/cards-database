import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Zorua",
		fr: "Zorua",
		de: "Zorua"
	},
	illustrator: "Saya Tsuruta",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		570,
	],
	hp: 60,
	types: [
		"Darkness",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Stampede",
				fr: "Ruée",
				de: "Zertrampeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				de: "Ramme"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		en: "It changes so it looks like its foe, tricks it, and then uses that opportunity to flee.",
		de: "Nicht selten überrumpelt es Gegner, indem es ihre Gestalt annimmt und den Überraschungseffekt zur Flucht nutzt."
	},
}

export default card
