import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'シェイミ'
	},

	illustrator: 'Mizue',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [492],
	hp: 70,
	types: ['Grass'],

	description: {
		ja: '大気の 毒素を 分解して 荒れた 大地を 一瞬のうちに 花畑にする 力を 持つ。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'ぱたぱた' },
			effect: {
				ja: '自分の手札をすべて山札にもどして切る。その後、山札を6枚引く。'
			},
			cost: ['Grass']
		},
		{
			name: { ja: 'まきかえす' },
			effect: {
				ja: '前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。'
			},
			damage: '30+',
			cost: ['Grass', 'Colorless']
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
				cardmarket: 560166,
				tcgplayer: 573922,
				cardtrader: 142409
			}
		}
	]
}

export default card
