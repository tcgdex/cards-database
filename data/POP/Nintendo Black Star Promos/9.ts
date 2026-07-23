import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Combusken",
		fr: "Galifeu"
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Trainer",

	set: Set,
	dexId: [
		256,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torchic",
		fr: "Poussifeu"
	},
	stage: "Stage1",



	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	variants: [
		{
			type: 'normal',
			stamp: ['winner'],
			thirdParty: {
				tcgplayer: 84399
			}
		},
		{
			type: 'normal',
			stamp: ['winner'],
			size: 'jumbo',
		}
	]
}

export default card
