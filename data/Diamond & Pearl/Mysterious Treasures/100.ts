import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Snorunt",
		fr: "Stalgamin",
		de: "Schneppke"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		361,
	],

	hp: 50,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Collect",
				fr: "Collectionner",
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
				"Water",
			],
			name: {
				en: "Snowball",
				fr: "Boule de neige",
				de: "Schneeball"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkungen."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+10"
		},
	],

	description: {
		fr: "Selon un vieux dicton des régions enneigées : \"Stalgamin dans la maison, richesse à l'horizon\"."
	},

	thirdParty: {
		cardmarket: 277729
	}
}

export default card
