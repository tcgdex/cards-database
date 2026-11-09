import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'レシラム'
	},

	illustrator: 'TOKIYA',
	rarity: 'Rare',
	category: 'Pokemon',
	dexId: [643],
	hp: 130,
	types: ['Fire'],

	description: {
		ja: '炎で 世界を 燃やしつくせる 伝説の ポケモン。 真実の 世界を 築く 人を 助ける。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'げきりん' },
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。"
			},
			damage: '20+',
			cost: ['Colorless', 'Colorless']
		},
		{
			name: { ja: 'しゃくねつのいぶき' },
			effect: {
				ja: '次の自分の番、このポケモンはワザが使えない。'
			},
			damage: 130,
			cost: ['Fire', 'Fire', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Water', value: "×2" }],
	resistances: [],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 560173,
				tcgplayer: 573929,
				cardtrader: 142416
			}
		}
	]
}

export default card
