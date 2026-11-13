import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ポケモンブリーダー'
	},

	illustrator: 'Sanosuke Sakuma',
	rarity: 'Ultra Rare',
	category: 'Trainer',

	effect: {
		ja: '自分の山札を2枚引く。その後、自分のバトルポケモンのHPを「20」回復する。'
	},

	trainerType: 'Supporter',

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560235,
				tcgplayer: 573991,
				cardtrader: 142478
			}
		}
	]
}

export default card
