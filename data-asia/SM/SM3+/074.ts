import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ライチュウGX'
	},

	illustrator: '5ban Graphics',
	rarity: 'Ultra Rare',
	category: 'Pokemon',
	dexId: [26],
	hp: 210,
	types: ['Lightning'],

	evolveFrom: {
		ja: 'ピカチュウ'
	},

	stage: 'Stage1',

	suffix: 'GX',

	attacks: [
		{
			name: { ja: 'パワフルスパーク' },
			effect: {
				ja: "自分の場のポケモンについている{L}エネルギーの数×20ダメージ追加。"
			},
			damage: '20+',
			cost: ['Colorless', 'Colorless']
		},
		{
			name: { ja: 'かみなり' },
			effect: {
				ja: 'このポケモンにも30ダメージ。'
			},
			damage: 160,
			cost: ['Lightning', 'Lightning', 'Colorless']
		},
		{
			name: { ja: 'ボルテールGX' },
			effect: {
				ja: '相手のバトルポケモンをマヒにする。［対戦中、自分はGXワザを1回しか使えない。］'
			},
			damage: 120,
			cost: ['Lightning', 'Lightning', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Metal', value: '-20' }],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560232,
				tcgplayer: 573988,
				cardtrader: 142475
			}
		}
	]
}

export default card
