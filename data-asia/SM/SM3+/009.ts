import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ビリジオン'
	},

	illustrator: 'kawayoo',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [640],
	hp: 110,
	types: ['Grass'],

	description: {
		ja: '頭の ツノは 鋭い 刃。 旋風のような 動きで 敵を 翻弄して 素早く 切りつける。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'かぜをまとう' },
			effect: {
				ja: 'のぞむなら、自分の手札にある基本エネルギーを1枚、このポケモンにつける。'
			},
			damage: 30,
			cost: ['Grass']
		},
		{
			name: { ja: 'ロングスピア' },
			effect: {
				ja: '相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］'
			},
			damage: 90,
			cost: ['Grass', 'Grass', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fire', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560167,
				tcgplayer: 573923,
				cardtrader: 142410
			}
		}
	]
}

export default card
