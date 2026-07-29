import { Card } from '../../../interfaces'
import Set from '../SM trainer Kit (Lycanroc)'

const card: Card = {
	dexId: [744],
	set: Set,

	name: {
		en: "Rockruff",
		fr: "Rocabot",
		es: "Rockruff",
		it: "Rockruff",
		pt: "Rockruff",
		de: "Wuffels"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: [
		"Fighting"
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
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Throw"
			},
			damage: 20
		},
	],
	stage: "Basic",
	retreat: 1,

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 297245,
				tcgplayer: 152834
			}
		},
	],

}

export default card