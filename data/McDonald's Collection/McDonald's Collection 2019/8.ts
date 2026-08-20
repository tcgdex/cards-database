import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2019'

const card: Card = {
	set: Set,
	illustrator: "Miki Tanaka",
	category: "Pokemon",

	dexId: [56],

	description: {
		en: "It can spontaneously become enraged. Everyone near it clears out as it rampages and the resulting loneliness makes it angrier still.",
		de: "Es rastet häufig völlig unvermittelt aus. Danach findet es sich oft mutterseelenallein wieder. Das macht es schließlich noch wütender."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Three-Step Strike",
			de: "Dreistufenstoß"
		},

		damage: "10×",

		effect: {
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		}
	}],

	name: {
		en: "Mankey",
		de: "Menki"
	},

	rarity: "None",
	hp: 50,
	types: ["Fighting"],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		}
	],

	retreat: 1,

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 412884,
				tcgplayer: 200971
			}
		}
	]
}

export default card

