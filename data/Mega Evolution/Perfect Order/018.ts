import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Otaria",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	stage: "Basic",
	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				fr: "Pluie Éclaboussante",
			},
			damage: "10",
		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				fr: "Grosse Vague",
			},
			damage: "30",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "J",
	illustrator: "Kanami Ogata",

	thirdParty: {
		cardmarket: 877430
	}
}

export default card
