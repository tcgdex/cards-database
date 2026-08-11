import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Tropical Tidal Wave",
		fr: "Raz-de-marée tropical"
	},
	illustrator: undefined,
	rarity: "Common",
	category: "Trainer",

	set: Set,

	trainerType: "Item",

	variants: [
		{
			type: 'normal',
			stamp: ['worlds-2005'],
			thirdParty: {
				tcgplayer: 90050
			}
		},
		{
			type: 'normal',
			stamp: ['worlds-2005', 'staff'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2005', 'finalist'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2005', 'quarter-finalist'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2005', 'semi-finalist'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2005', 'top-sixteen'],
		},
		{
			type: 'normal',
			stamp: ['worlds-2005', 'top-thirty-two'],
		}
	]

}

export default card
