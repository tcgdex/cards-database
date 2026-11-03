import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ポケモンいれかえ'
	},

	illustrator: 'Ryo Ueda',
	category: 'Trainer',

	effect: {
		ja: '自分のバトルポケモンをベンチポケモンと入れ替える。'
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560223,
				tcgplayer: 573979,
				cardtrader: 142466
			}
		}
	],

	trainerType: 'Item',
	rarity: 'Uncommon'
}

export default card
