import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Litwick",
		fr: "Funécire",
		es: "Litwick",
		it: "Litwick",
		pt: "Litwick",
		de: "Lichtel"
	},

	illustrator: "Kanako Eo",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		607,
	],

	hp: 60,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Flare",
				fr: "Flamboiement",
				de: "Flackern"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "While shining a light and pretending to be a guide, it leaches off the life force of any who follow it.",
		de: "Es entzündet ein Licht und gibt vor, dem Gegner den Weg zu weisen, doch eigtl. saugt es ihm seine Lebensenergie ab."
	},

	thirdParty: {
		cardmarket: 280243,
		tcgplayer: 86811
	}
}

export default card
