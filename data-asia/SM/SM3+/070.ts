import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'リーリエ'
	},

	illustrator: 'Ken Sugimori',
	rarity: 'Uncommon',
	category: 'Trainer',

	effect: {
		ja: '自分の手札が6枚になるように、山札を引く。最初の自分の番に使ったなら、8枚になるように引く。'
	},

	trainerType: 'Supporter',

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560228,
				tcgplayer: 573984,
				cardtrader: 142471
			}
		}
	]
}

export default card
