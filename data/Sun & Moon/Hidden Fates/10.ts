import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar",
	},

	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 90,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Fire Punch",
				fr: "Poing de Feu",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		en: "Its entire body is burning. When it breathes, the temperature rises. When it sneezes, flames shoot out!",
	},

	thirdParty: {
		cardmarket: 394822,
		tcgplayer: 197652
	}
}

export default card
