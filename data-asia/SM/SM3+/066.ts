import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ポケモンキャッチャー'
	},

	illustrator: 'Toyste Beach',
	rarity: 'Uncommon',
	category: 'Trainer',

	effect: {
		ja: "コインを1回投げオモテなら、相手のベンチポケモンを1匹選び、バトルポケモンと入れ替える。"
	},

	trainerType: 'Item',

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560224,
				tcgplayer: 573980,
				cardtrader: 142467
			}
		}
	]
}

export default card
