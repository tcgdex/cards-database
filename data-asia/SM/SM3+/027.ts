import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'ケルディオ'
	},

	illustrator: 'kodama',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [647],
	hp: 110,
	types: ['Water'],

	description: {
		ja: '海や 川など 水面を 走り 世界中を 駆け巡る。 美しい 水辺に 現れる。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'すくいだす' },
			effect: {
				ja: "自分のトラッシュにある{W}ポケモンを1枚、相手に見せてから、手札に加える。"
			},
			cost: ['Colorless']
		},
		{
			name: { ja: 'かくごのつるぎ' },
			effect: {
				ja: "相手のベンチポケモンの数×20ダメージ追加。"
			},
			damage: '20+',
			cost: ['Water', 'Water']
		}
	],

	weaknesses: [{ type: 'Grass', value: "×2" }],
	resistances: [],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560185,
				tcgplayer: 573941,
				cardtrader: 142428
			}
		}
	]
}

export default card
