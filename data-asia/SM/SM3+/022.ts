import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ハリーセン'
	},

	illustrator: 'Shin Nagasawa',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [211],
	hp: 90,
	types: ['Water'],

	description: {
		ja: '全身の 毒針を 飛ばすため １０リットルの 水を 一気に 飲みこみ 体を ふくらませる。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'どくばり' },
			effect: {
				ja: '相手のバトルポケモンをどくにする。'
			},
			cost: ['Colorless']
		},
		{
			name: { ja: 'ショックばり' },
			effect: {
				ja: '相手のバトルポケモンが特殊状態なら、50ダメージ追加。'
			},
			damage: '20+',
			cost: ['Water', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Grass', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560180,
				tcgplayer: 573936,
				cardtrader: 142423
			}
		}
	]
}

export default card
