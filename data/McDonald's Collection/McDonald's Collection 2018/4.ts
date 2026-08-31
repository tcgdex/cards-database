import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2018'

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu",
		de: "Pikachu"
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pika Draw",
				de: "Pika-Zug"
			},
			effect: {
				en: "Draw a card",
				de: "Ziehe 1 Karte."
			},
		},
		{
			cost: [
				"Colorless", "Colorless",
			],
			name: {
				en: "Quick Attack",
				de: "Ruckzuckhieb"
			},
			effect: {
				en: "Flip a coin. If heads this attack does 20 more damage.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 20 Schadenspunkte mehr zu."
			},
			damage: "20+"
		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		}
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		}
	],

	retreat: 1,

	illustrator: "Shibuzoh.",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 366772,
				tcgplayer: 180452
			}
		}
	]
}

export default card

