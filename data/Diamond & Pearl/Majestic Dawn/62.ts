import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Eevee",
		fr: "Evoli",
		de: "Evoli"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		133,
	],

	hp: 60,

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
				en: "Call for Family",
				fr: "Appel à la famille",
				de: "Familienruf"
			},
			effect: {
				en: "Search your deck for as many Eevee as you like and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck autant d'Evoli que vous le voulez et placez-les sur votre Banc. Ensuite, mélangez votre deck.",
				de: "Durchsuche dein Deck nach beliebig vielen Evoli-Karten und lege sie auf deine Bank. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Lunge",
				fr: "Coup rapide",
				de: "Ausfall"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				de: "Wirf 1 Münze. Bei 'Kopf' hat dieser Angriff keine Auswirkungen"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278111,
		tcgplayer: 85084
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "normal",
			stamp: ["platinum"]
		}
	]
}

export default card
