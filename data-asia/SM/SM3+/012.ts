import { Card } from '../../../interfaces'
import Set from '../SM3+'

const card: Card = {
	set: Set,
	name: {
		ja: 'コータス'
	},

	illustrator: 'Suwama Chiaki',
	rarity: 'Uncommon',
	category: 'Pokemon',
	dexId: [324],
	hp: 110,
	types: ['Fire'],

	description: {
		ja: '石炭が エネルギーの 源。 コータスの 棲んでいる 山には 多くの 石炭が 眠っている。'
	},

	stage: 'Basic',

	attacks: [
		{
			name: { ja: 'こうあつねつ' },
			effect: {
				ja: '次の自分の番、このポケモンの「こうあつねつ」のダメージは「+50」される。'
			},
			damage: 30,
			cost: ['Colorless', 'Colorless']
		},
		{
			name: { ja: 'かえんほうしゃ' },
			effect: {
				ja: 'このポケモンについているエネルギーを、1個トラッシュする。'
			},
			damage: 90,
			cost: ['Fire', 'Fire', 'Colorless']
		}
	],

	weaknesses: [{ type: 'Water', value: "×2" }],
	resistances: [],

	retreat: 3,

	regulationMark: "A",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 560170,
				tcgplayer: 573926,
				cardtrader: 142413
			}
		}
	]
}

export default card
