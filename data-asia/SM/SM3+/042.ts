import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ラティオス'
	},

	illustrator: 'Mitsuhiro Arita',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [381],
	hp: 110,
	types: ['Psychic'],

	description: {
		ja: '高い 知能を 持つ ポケモン。 腕を 折りたたんで 飛べば ジェット機を 追い越す スピードだ。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'ブレイクスルー' },
			effect: {
				ja: '相手のベンチポケモン1匹にも、30ダメージ。［ベンチは弱点・抵抗力を計算しない。］'
			},
			damage: 30,
			cost: ['Colorless', 'Colorless']
		},
		{
			name: { ja: 'ラグーンフライト' },
			damage: 70,
			cost: ['Psychic', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Psychic', value: "×2" }],
	resistances: [],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560200,
				tcgplayer: 573956,
				cardtrader: 142443
			}
		}
	]
}

export default card
