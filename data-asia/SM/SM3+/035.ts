import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'マイナン'
	},

	illustrator: 'nagimiso',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [312],
	hp: 70,
	types: ['Lightning'],

	description: {
		ja: 'マイナンと プラスルの 電気は 血液の 流れを 良くして こりを ほぐす 効果が ある。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'もってくる' },
			effect: {
				ja: '自分の山札を1枚引く。'
			},
			cost: ['Colorless']
		},
		{
			name: { ja: 'スパーク' },
			effect: {
				ja: '相手のベンチポケモン1匹にも、20ダメージ。［ベンチは弱点・抵抗力を計算しない。］'
			},
			damage: 20,
			cost: ['Lightning']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Metal', value: '-20' }],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560193,
				tcgplayer: 573949,
				cardtrader: 142436
			}
		}
	]
}

export default card
