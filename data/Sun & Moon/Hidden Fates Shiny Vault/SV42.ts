import { Card } from '../../../interfaces'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		en: "Swablu",
		fr: "Tylton",
		de: "Wablu"
	},
	illustrator: "Shigenori Negishi",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		333,
	],
	hp: 50,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collecte",
				de: "Sammeln"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic",
				de: "Schnabel"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		en: "It constantly grooms its cotton-like wings. It takes a shower to clean itself if it becomes dirty.",
		de: "Ständig pflegt es seine watteartigen Flügel. Falls es schmutzig wird, nimmt es eine Dusche, um sich zu putzen."
	},
}

export default card
