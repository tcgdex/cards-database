import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ハウ'
	},

	illustrator: 'Ken Sugimori',
	rarity: 'Uncommon',
	category: 'Trainer',

	effect: {
		ja: '自分の山札を3枚引く。'
	},

	trainerType: 'Supporter',

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560225,
				tcgplayer: 573981,
				cardtrader: 142468
			}
		}
	]
}

export default card
