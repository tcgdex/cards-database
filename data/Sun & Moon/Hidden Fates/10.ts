import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Magmar",
		fr: "Magmar",
		de: "Magmar"
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
				de: "Feuerschlag"
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
		de: "Mit seinem brennenden Körper und glühenden Atem heizt es seine Umgebung auf. Beim Niesen stößt es Flammen aus."
	},

	thirdParty: {
		cardmarket: 394822,
		tcgplayer: 197652
	}
}

export default card
