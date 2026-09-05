import { Card } from '../../../interfaces'
import Set from '../Black & White'

const card: Card = {
	name: {
		en: "Audino",
		fr: "Nanméouïe",
		es: "Audino",
		it: "Audino",
		pt: "Audino",
		de: "Ohrdoch"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		531,
	],

	hp: 80,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Doubleslap",
				fr: "Torgnoles",
				de: "Duplexhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.",
		de: "Berührt es jemanden mit den Fühlern an seinen Ohren, erfährt es durch den Herzschlag der Person, wie es ihr geht."
	},

	thirdParty: {
		cardmarket: 279825,
		tcgplayer: 83659
	}
}

export default card
