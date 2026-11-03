import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ポケモンキャッチャー'
	},

	illustrator: 'Toyste Beach',
	category: 'Trainer',

	effect: {
		ja: '相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。'
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560224,
				tcgplayer: 573980,
				cardtrader: 142467
			}
		}
	],

	trainerType: 'Item',
	rarity: 'Uncommon'
}

export default card
