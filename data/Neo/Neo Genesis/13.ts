import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Skarmory",
		fr: "Airmure",
		de: "Panzaeron"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		227,
	],

	hp: 60,

	types: [
		"Metal",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],

			name: {
				en: "Claw",
				fr: "Mâchoire",
				de: "Klaue"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
				de: "Wirf eine Münze. Bei „Zahl“ hat dieser Angriff keine Auswirkungen."
			},

			damage: 20
		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Steel Wing",
				fr: "Aile d'acier",
				de: "Stahlschwinge"
			},
			effect: {
				en: "Flip a coin. If heads, all damage done by attacks to Skarmory during your opponent's next turn is reduced by 20 (after applying Weakness and Resistance).",
				fr: "Lancez une pièce. Si c'est face, tous les dégâts infligés à Airmure par des attaques pendant le prochain tour de votre adversaire sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
				de: "Wirf eine Münze. Bei „Kopf“ wird aller Schaden, der Panzaeron während des nächsten gegnerischen Zuges durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],
	retreat: 2,


	description: {
		en: "Its sturdy wings look heavy, but they are actually hollow and light, allowing it to fly freely in the sky.",
		fr: "Ses ailes solides semblent lourdes, mais elles sont en fait creuses et légères, lui permettant de voler librement dans le ciel.",
		de: "Seine kräftigen Flügel sehen schwer aus, aber sie sind eigentlich hohl und leicht, und lassen es frei im Himmel fliegen."
	},


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 274413,
				tcgplayer: 89232
			}
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274413,
				tcgplayer: 89232
			}
		}
	]
}

export default card
