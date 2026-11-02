import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2011'

const card: Card = {
	set: Set,
	illustrator: "MAHOU",
	category: "Pokemon",

	dexId: [531],

	description: {
		en: "It touches others with the feelers on its ears, using the sound of their heartbeats to tell how they are feeling.",
		de: "Berührt es jemanden mit den Fühlern an seinen Ohren, erfährt es durch den Herzschlag der Person, wie es ihr geht."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Slap",
			fr: "Torgnoles",
			de: "Duplexhieb"
		},

		damage: "30×",

		effect: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
			de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
		}
	}],

	name: {
		en: "Audino",
		fr: "Nanméouïe",
		de: "Ohrdoch"
	},

	rarity: "None",
	hp: 80,
	types: ["Colorless"],

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 281801,
				tcgplayer: 83660
			}
		}
	]
}

export default card

