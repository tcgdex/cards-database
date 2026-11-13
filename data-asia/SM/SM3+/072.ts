import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ワープエネルギー'
	},

	illustrator: '',

	rarity: 'Uncommon',
	category: 'Energy',

	effect: {
		ja: "このカードは、{C}エネルギー1個ぶんとしてはたらく。このカードを手札からバトルポケモンにつけたとき、このカードをつけたポケモンをベンチポケモンと入れ替える。"
	},
	energyType: 'Special',

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560230,
				tcgplayer: 573986,
				cardtrader: 142473
			}
		}
	]
}

export default card
