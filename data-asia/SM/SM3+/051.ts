import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ズルッグ'
	},

	illustrator: 'Sekio',
	rarity: 'Common',
	category: 'Pokemon',
	dexId: [559],
	hp: 60,
	types: ['Darkness'],

	description: {
		ja: '皮を 首まで 引き上げて 防御の 姿勢。 ゴムのような 弾力で ダメージを 減らす。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'なかまをよぶ' },
			effect: {
				ja: '自分の山札にあるたねポケモンを1枚、ベンチに出す。そして山札を切る。'
			},
			cost: ['Darkness']
		},
		{
			name: { ja: 'ずつき' },
			damage: 20,
			cost: ['Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Psychic', value: '-20' }],

	retreat: 1,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560209,
				tcgplayer: 573965,
				cardtrader: 142452
			}
		}
	]
}

export default card
