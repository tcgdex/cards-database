import { Card } from '../../../interfaces'
import Set from '../Team Rocket'

const card: Card = {
	name: {
		en: "Slowpoke",
		fr: "Ramoloss"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		79,
	],

	hp: 50,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Afternoon Nap",
				fr: "Siestre"
			},
			effect: {
				en: "Search your deck for a Energy card and attach it to Slowpoke. Shuffle your deck afterward.",
				fr: "Cherchez une carte Énergie  dans votre deck et attachez-la à Ramoloss. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Headbutt",
				fr: "Coup d'boule"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	description: {
		fr: "Bien qu'il sache pêcher, il fait preuve de rès peu d'intelligence."
	}
}

export default card
