import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Lapras",
		de: "Lapras"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Assist",
				de: "Assistent"
			},
			effect: {
				en: "Search your deck for a Supporter card, show it to your opponent and put it into your hand. Shuffle your deck afterward.",
				de: "Durchsuche dein Deck nach einer Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Hypnoblast",
				de: "Hypnoschuss"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
				de: "Wirf eine Münze. Bei 'Kopf' schläft das verteidigende Pokémon jetzt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275329
	}
}

export default card
