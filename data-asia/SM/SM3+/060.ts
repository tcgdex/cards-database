import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'エネルギー回収'
	},

	illustrator: 'Toyste Beach',
	category: 'Trainer',

	effect: {
		ja: '自分のトラッシュから基本エネルギーを2枚選び、相手に見せてから、手札に加える。'
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560218,
				tcgplayer: 573974,
				cardtrader: 142461
			}
		}
	],

	trainerType: 'Item',
	rarity: 'Uncommon'
}

export default card
