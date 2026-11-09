import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ゴビット'
	},

	illustrator: 'Kyoko Umemoto',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [622],
	hp: 90,
	types: ['Psychic'],

	description: {
		ja: '体内で 燃える エネルギーに よって 活動しているが どんな エネルギーなのかは 不明である。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'メガトンパンチ' },
			damage: 60,
			cost: ['Psychic', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Darkness', value: "×2" }],
	resistances: [{ type: 'Fighting', value: '-20' }],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560202,
				tcgplayer: 573958,
				cardtrader: 142445
			}
		}
	]
}

export default card
