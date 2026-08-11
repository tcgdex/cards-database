import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [734],
	set: Set,

	name: {
		en: "Yungoos",
		fr: "Manglouton",
		es: "Yungoos",
		it: "Yungoos",
		pt: "Yungoos",
		de: "Mangunior"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: [
		"Colorless"
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle"
			},
			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bite"
			},
			damage: 20
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297243,
				tcgplayer: 152832
			}
		},
	],

}

export default card