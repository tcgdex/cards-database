import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		fr: "Braisillon",
	},
	set: Set,
	rarity: "Common",
	category: "Pokemon",
	hp: 90,
	stage: "Stage1",
	evolveFrom: {
		fr: "Passerouge",
	},
	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				fr: "Flamboiement",
			},
			damage: "60",
		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "J",
	illustrator: "Sumiyoshi Kizuki",

	thirdParty: {
		cardmarket: 877425
	}
}

export default card
