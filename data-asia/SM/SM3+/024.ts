import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'フローゼル'
	},

	illustrator: 'Suwama Chiaki',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [419],
	hp: 100,
	types: ['Water'],

	evolveFrom: {
		ja: 'ブイゼル'
	},

	description: {
		ja: '発達した 浮き袋で 浮かぶ。 おぼれた 人を 救助する 手伝いを している ポケモンだ。'
	},

	stage: 'Stage1',

	attacks: [
		{
			name: { ja: 'ひれカッター' },
			damage: 20,
			cost: ['Colorless']
		},
		{
			name: { ja: 'アクアボム' },
			effect: {
				ja: 'このポケモンにも30ダメージ。'
			},
			damage: 120,
			cost: ['Water', 'Colorless', 'Colorless']
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
				cardmarket: 560182,
				tcgplayer: 573938,
				cardtrader: 142425
			}
		}
	]
}

export default card
