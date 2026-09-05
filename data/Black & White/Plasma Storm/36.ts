import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Vanillish",
		fr: "Sorboul",
		es: "Vanillish",
		it: "Vanillish",
		pt: "Vanillish",
		de: "Gelatroppo"
	},

	illustrator: "Shin Nagasawa",
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
				"Water",
				"Colorless",
			],
			name: {
				en: "Icy Snow",
				fr: "Verglas",
				de: "Eisiger Schnee"
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

	retreat: 1,

	description: {
		en: "They cool down the surrounding air and create ice particles, which they use to freeze their foes.",
		de: "Es produziert Eiskörner, indem es die Luft um sich herum abkühlt, und zieht mit ihnen eine Eisschicht um seinen Gegner."
	},

	thirdParty: {
		cardmarket: 280776,
		tcgplayer: 90266
	}
}

export default card
