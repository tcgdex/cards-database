import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Vanillish",
		fr: "Sorboul",
		es: "Vanillish",
		it: "Vanillish",
		pt: "Vanillish",
		de: "Gelatroppo"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		583,
	],

	hp: 80,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Vanillite",
		fr: "Sorbébé",
		de: "Gelatini"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Surefire Spin",
				fr: "Tourbillon Glacé",
				de: "Narrensicherer Dreher"
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, this attack does 40 more damage.",
				fr: "Lancez 2 pièces. Si vous obtenez 2 côtés face, cette attaque inflige 40 dégâts supplémentaires.",
				de: "Wirf 2 Münzen. Zeigen beide „Kopf“, fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "They cool down the surrounding air and create ice particles, which they use to freeze their foes.",
		de: "Es produziert Eiskörner, indem es die Luft um sich herum abkühlt, und zieht mit ihnen eine Eisschicht um seinen Gegner."
	},

	thirdParty: {
		cardmarket: 280906,
		tcgplayer: 90267
	}
}

export default card
