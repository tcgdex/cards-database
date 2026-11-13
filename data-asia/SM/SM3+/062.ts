import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'スーパーポケモン回収'
	},

	illustrator: 'Toyste Beach',
	rarity: 'Uncommon',
	category: 'Trainer',

	effect: {
		ja: 'コインを1回投げオモテなら、自分のポケモン1匹と、ついているすべてのカードを、手札にもどす。'
	},

	trainerType: 'Item',

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560220,
				tcgplayer: 573976,
				cardtrader: 142463
			}
		}
	]
}

export default card
