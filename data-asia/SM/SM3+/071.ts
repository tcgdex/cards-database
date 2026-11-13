import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ダブル無色エネルギー'
	},

	illustrator: '',

	rarity: 'Uncommon',
	category: 'Energy',

	effect: {
		ja: "このカードは、{C}エネルギー2個ぶんとしてはたらく。"
	},
	energyType: 'Special',

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560229,
				tcgplayer: 573985,
				cardtrader: 142472
			}
		}
	]
}

export default card
