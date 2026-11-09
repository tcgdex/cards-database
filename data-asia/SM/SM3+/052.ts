import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ズルズキン'
	},

	illustrator: 'Mitsuhiro Arita',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [560],
	hp: 110,
	types: ['Darkness'],

	evolveFrom: {
		ja: 'ズルッグ'
	},

	description: {
		ja: '脱皮した 皮を ずりあげて ダメージを 減らしつつ キック！ とさかが 大きいほど 偉そうだ。'
	},

	stage: 'Stage1',

	attacks: [
		{
			name: { ja: 'デンジャラスヘッド' },
			effect: {
				ja: '相手のバトルポケモンがたねポケモンなら、50ダメージ追加。'
			},
			damage: '20+',
			cost: ['Colorless', 'Colorless']
		},
		{
			name: { ja: 'ぶちかます' },
			damage: 90,
			cost: ['Darkness', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Fighting', value: "×2" }],
	resistances: [{ type: 'Psychic', value: '-20' }],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560210,
				tcgplayer: 573966,
				cardtrader: 142453
			}
		}
	]
}

export default card
