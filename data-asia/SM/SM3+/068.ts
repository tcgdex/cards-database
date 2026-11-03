import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ポケモンブリーダー'
	},

	illustrator: 'Kanako Eo',
	category: 'Trainer',

	effect: {
		ja: '自分の山札を2枚引く。その後、自分のバトルポケモンのHPを「20」回復する。'
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560226,
				tcgplayer: 573982,
				cardtrader: 142469
			}
		}
	],

	trainerType: 'Supporter',
	rarity: 'Uncommon'
}

export default card
