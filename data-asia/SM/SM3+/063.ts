import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ダメージムーバー'
	},

	illustrator: 'Toyste Beach',
	category: 'Trainer',

	effect: {
		ja: '自分の場のポケモン1匹にのっているダメカンを3個、自分の別のポケモン1匹にのせ替える。'
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560221,
				tcgplayer: 573977,
				cardtrader: 142464
			}
		}
	],

	trainerType: 'Item',
	rarity: 'Uncommon'
}

export default card
