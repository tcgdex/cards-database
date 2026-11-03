import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ライチュウGX'
	},

	illustrator: "5ban Graphics",
	category: 'Pokemon',
	hp: 210,
	types: ['Lightning'],

	stage: 'Stage1',

	attacks: [
		{
			name: { ja: 'パワフルスパーク' },
			damage: '20+',
			cost: ['Colorless', 'Colorless'],
			effect: {
				ja: "自分の場のポケモンについている{L}エネルギーの数x20ダメージ追加。"
			}
		},
		{
			name: { ja: 'かみなり' },
			damage: 160,
			cost: ['Lightning', 'Lightning', 'Colorless'],
			effect: {
				ja: 'このポケモンにも30ダメージ。'
			}
		},
		{
			name: { ja: 'ボルテールGX' },
			damage: 120,
			cost: ['Lightning', 'Lightning', 'Colorless'],
			effect: {
				ja: '相手のバトルポケモンをマヒにする。［対戦中、自分はGXワザを1回しか使えない。］'
			}
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Metal', value: '-20' }],

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560237,
				tcgplayer: 573993,
				cardtrader: 142480
			}
		}
	],

	evolveFrom: {
		ja: 'ピカチュウ'
	},

	retreat: 1,
	rarity: "Secret Rare",
	dexId: [26],

	suffix: 'GX'
}

export default card
