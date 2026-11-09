import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ポケモンいれかえ'
	},

	illustrator: 'Ryo Ueda',
	rarity: 'Uncommon',
	category: 'Trainer',

	effect: {
		ja: '自分のバトルポケモンをベンチポケモンと入れ替える。'
	},

	trainerType: 'Item',

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560223,
				tcgplayer: 573979,
				cardtrader: 142466
			}
		}
	]
}

export default card
