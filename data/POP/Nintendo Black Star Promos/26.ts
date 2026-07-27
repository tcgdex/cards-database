import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Tropical Wind",
		fr: "Vent tropical"
	},
	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Trainer",

	set: Set,

	variants: [
		{
			type: 'normal',
			stamp: ['worlds-2004'],
			thirdParty: {
				tcgplayer: 90053
			}
		},
		{
			type: 'normal',
			stamp: ['worlds-2004', 'staff'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2004', 'finalist'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2004', 'quarter-finalist'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2004', 'semi-finalist'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2004', 'top-sixteen'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2004', 'top-thirty-two'],
		}
	]
}

export default card
