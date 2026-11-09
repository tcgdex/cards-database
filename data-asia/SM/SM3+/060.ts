import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'エネルギー回収'
	},

	illustrator: 'Toyste Beach',
	rarity: 'Uncommon',
	category: 'Trainer',

	effect: {
		ja: "自分のトラッシュにある基本エネルギーを2枚、相手に見せてから、手札に加える。"
	},

	trainerType: 'Item',

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560218,
				tcgplayer: 573974,
				cardtrader: 142461
			}
		}
	]
}

export default card
