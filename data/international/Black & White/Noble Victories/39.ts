import { Card } from '../../../interfaces'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		en: "Tynamo",
		fr: "Anchwatt",
		es: "Tynamo",
		it: "Tynamo",
		pt: "Tynamo",
		de: "Zapplardin"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		602,
	],

	hp: 30,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		en: "While one alone doesn't have much power, a chain of many Tynamo can be as powerful as lightning.",
	},

	thirdParty: {
		cardmarket: 280161,
		tcgplayer: 90094
	}
}

export default card
