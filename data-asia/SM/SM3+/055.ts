import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'イベルタル'
	},

	illustrator: 'Shin Nagasawa',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [717],
	hp: 120,
	types: ['Darkness'],

	description: {
		ja: '翼と 尾羽を 広げて 赤く 輝くとき 生き物の 命を 吸い取る 伝説の ポケモン。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'ひるがえす' },
			effect: {
				ja: 'のぞむなら、このポケモンをベンチポケモンと入れ替える。'
			},
			damage: 30,
			cost: ['Colorless', 'Colorless']
		},
		{
			name: { ja: 'デスウイング' },
			effect: {
				ja: "自分のトラッシュにある{D}エネルギーを1枚、ベンチポケモンにつける。"
			},
			damage: 90,
			cost: ['Darkness', 'Colorless', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Lightning', value: "×2" }],
	resistances: [{ type: 'Fighting', value: '-20' }],

	retreat: 2,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560213,
				tcgplayer: 573969,
				cardtrader: 142456
			}
		}
	]
}

export default card
