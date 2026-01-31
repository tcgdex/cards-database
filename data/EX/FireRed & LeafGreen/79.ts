import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Shellder",
		fr: "Kokiyas",
		de: "Muschas"
	},

	illustrator: "Aya Kusube",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		90,
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
				en: "Minimize",
				fr: "Lilliput",
				de: "Komprimator"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Shellder by attacks is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lors du prochain tour de votre adversaire, les dégâts infligés à Kokiyas par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Aller Schaden, der Muschas während des nächsten Zuges deines Gegners durch Angriff zugefügt wird, wird um 20 Schadenspunkte reduziert (nach Verechnung von Schwäche und Resistenz.)"
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague",
				de: "Wellenplatscher"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	
	retreat: 1,

	thirdParty: {
		cardmarket: 276255,
		tcgplayer: 89137
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "holo",
			foil: "energy"
		}
	]
}

export default card
