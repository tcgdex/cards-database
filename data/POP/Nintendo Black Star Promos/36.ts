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
			stamp: ['worlds-2010'],
			thirdParty: {
				tcgplayer: 90052
			}
		},
		{
			type: 'normal',
			stamp: ['worlds-2010', 'staff'],
			thirdParty: {
				tcgplayer: 97703
			}
		},
		{
			type: 'normal',
			stamp: ['worlds-2010', 'finalist'],
			thirdParty: {
				tcgplayer: 97701
			}
		},
		{
			type: 'normal',
			stamp: ['worlds-2010', 'quarter-finalist'],
			thirdParty: {
				tcgplayer: 97701
			}
		},
		{
			type: 'normal',
			stamp: ['worlds-2010', 'semi-finalist'],
			thirdParty: {
				tcgplayer: 97702
			}
		},
		{
			type: 'normal',
			stamp: ['worlds-2010', 'top-sixteen'],
			thirdParty: {
				tcgplayer: 97700
			}
		},
		{
			type: 'normal',
			stamp: ['worlds-2010', 'top-thirty-two'],
			thirdParty: {
				tcgplayer: 97699
			}
		}
	]
}

export default card
