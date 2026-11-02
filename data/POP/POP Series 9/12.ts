import { Card } from '../../../interfaces'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		en: "Buneary",
		fr: "Laporeille",
		de: "Haspiror"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [427],

	hp: 50,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dizzy Punch",
				fr: "Uppercut",
				de: "Irrschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de faces.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: "10×",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Defense Curl",
				fr: "Boul'Armure",
				de: "Einigler"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done to Buneary by attacks during your opponent's next turn.",
				fr: "Lancez une pièce. Si c'est face, évitez tous les dégâts infligés à Laporeille lors du prochain tour de votre adversaire.",
				de: "Wirf 1 Münze. Bei „Kopf“ verhindere allen Schaden, der Haspiror während des nächsten Zuges deines Gegners zugefügt wird."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	description: {
		en: "When it senses danger, it perks up its ears. On cold nights, it sleeps with its head tucked into its fur.",
		fr: "Il dresse les oreilles quand il sent le danger. Il dort la tête dans sa fourrure pendant les nuits froides.",
		de: "Nimmt es Gefahr wahr, richtet es seine Ohren auf. In kalten Nächten vergräbt es den Kopf in seinem Fell."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84042,
				cardmarket: 278563
			},
		},
	],

}

export default card
