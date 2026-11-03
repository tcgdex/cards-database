import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ワープエネルギー'
	},

	illustrator: '',
	category: 'Energy',
	energyType: 'Special',

	effect: {
		ja: 'このカードは、[無]エネルギー1個ぶんとしてはたらく。このカードを手札からバトルポケモンにつけたとき、このカードをつけたポケモンをベンチポケモンと入れ替える。'
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560230,
				tcgplayer: 573986,
				cardtrader: 142473
			}
		}
	],

	rarity: 'Uncommon'
}

export default card
