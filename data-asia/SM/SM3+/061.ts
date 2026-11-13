import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'スーパーボール'
	},

	illustrator: 'Ryo Ueda',
	rarity: 'Uncommon',
	category: 'Trainer',

	effect: {
		ja: "自分の山札を上から7枚見る。その中にあるポケモンを1枚、相手に見せてから、手札に加えてよい。残りのカードは山札にもどして切る。"
	},

	trainerType: 'Item',

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560219,
				tcgplayer: 573975,
				cardtrader: 142462
			}
		}
	]
}

export default card
