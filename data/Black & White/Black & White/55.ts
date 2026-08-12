import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Solosis",
		fr: "Nucléos",
		es: "Solosis",
		it: "Solosis",
		pt: "Solosis",
		de: "Monozyto"
	},

	illustrator: "MAHOU",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		577,
	],

	hp: 30,

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
				en: "Cell Culture",
				fr: "Culture Cellulaire",
				de: "Zellkultur"
			},
			effect: {
				en: "Search your deck for Solosis and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez Nucléos dans votre deck et placez-le sur votre Banc. Mélangez ensuite votre deck.",
				de: "Durchsuche dein Deck nach Monozyto und lege es auf deine Bank. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
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
		en: "Because their bodies are enveloped in a special liquid, they can survive in any environment.",
		de: "Da sein Körper von einer speziellen Flüssigkeit umgeben ist, kann es in jedem Umfeld überleben."
	},

	thirdParty: {
		cardmarket: 279793,
		tcgplayer: 89420
	}
}

export default card
