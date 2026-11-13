import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ひかるボルケニオン'
	},

	illustrator: 'Hitoshi Ariga',
	rarity: "Rare Shining",
	category: 'Pokemon',
	dexId: [721],
	hp: 130,
	types: ['Water'],

	description: {
		ja: '水蒸気を 噴き出して 自分の 姿を 濃霧で 隠す。 人の 立ち入らない 山に 住むという。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'デュアルポンプ' },
			effect: {
				ja: '相手のポケモン2匹に、それぞれ50ダメージ。［ベンチは弱点・抵抗力を計算しない。］'
			},
			cost: ['Water', 'Water', 'Water']
		},
		{
			name: { ja: 'グランドスマッシュ' },
			effect: {
				ja: "コインを4回投げ、オモテの数×50ダメージ。"
			},
			damage: '50×',
			cost: ['Colorless', 'Colorless', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Lightning', value: "×2" }],
	resistances: [],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560186,
				tcgplayer: 573942,
				cardtrader: 142429
			}
		}
	]
}

export default card
